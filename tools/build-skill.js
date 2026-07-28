#!/usr/bin/env node
/**
 * build-skill.js — packages the distributable Claude Skill (.skill file)
 * for TidyFactor Design from the repo's single source of truth.
 */

const fs = require("fs");
const path = require("path");
const { execFileSync, spawnSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const SKILL_NAME = "tidyfactor-design";
const SRC_WRAPPER = path.join(ROOT, ".claude-skill");
const DIST_DIR = path.join(ROOT, "dist");
const STAGE_DIR = path.join(DIST_DIR, SKILL_NAME);

const args = process.argv.slice(2);
const outFlagIdx = args.indexOf("--out");
const OUT_FILE =
  outFlagIdx !== -1 && args[outFlagIdx + 1]
    ? path.resolve(ROOT, args[outFlagIdx + 1])
    : path.join(DIST_DIR, `${SKILL_NAME}.skill`);

const ROOT_COPIES = [
  "memory",
  "templates",
  "references",
  "scripts",
  "brand.json",
  "requirements.txt",
  "LICENSE",
];

function log(msg) {
  console.log(`[build-skill] ${msg}`);
}

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    log(`  ⚠ skipped (not found): ${path.relative(ROOT, src)}`);
    return;
  }
  fs.cpSync(src, dest, { recursive: true });
}

function assertExists(p, hint) {
  if (!fs.existsSync(p)) {
    throw new Error(`Missing required path: ${p}\n${hint || ""}`);
  }
}

function zipArchive(stagePath, outFile, cwdDir) {
  log("zipping Claude skill archive...");
  if (fs.existsSync(outFile)) fs.rmSync(outFile);

  const stageBasename = path.basename(stagePath);

  // 1. Try native `zip` command
  try {
    execFileSync("zip", ["-r", "-q", outFile, stageBasename], {
      cwd: cwdDir,
      stdio: "inherit",
    });
    return;
  } catch (err) {
    log("`zip` binary unavailable or failed; trying Python fallback...");
  }

  // 2. Try Python built-in zipfile module
  try {
    const pythonCmd = process.platform === "win32" ? "python" : "python3";
    execFileSync(pythonCmd, ["-m", "zipfile", "-c", outFile, stageBasename], {
      cwd: cwdDir,
      stdio: "inherit",
    });
    return;
  } catch (pyErr) {
    log("Python zipfile fallback failed; trying PowerShell fallback...");
  }

  // 3. Try PowerShell Compress-Archive
  try {
    const tmpZip = outFile.replace(/\.(skill|zip)$/, ".zip");
    if (fs.existsSync(tmpZip)) fs.rmSync(tmpZip);
    const result = spawnSync(
      "powershell",
      [
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        `Compress-Archive -Path "${stagePath}" -DestinationPath "${tmpZip}" -Force`,
      ],
      { stdio: "inherit" }
    );
    if (result.status === 0) {
      if (tmpZip !== outFile) {
        fs.renameSync(tmpZip, outFile);
      }
      return;
    }
  } catch (winErr) {
    // Ignore and throw cumulative error
  }

  throw new Error("Failed to create zip archive via zip, Python, or PowerShell.");
}

function main() {
  log("running skill validation before build...");
  execFileSync("node", [path.join(__dirname, "validate-skill.js"), "--sync"], { stdio: "inherit" });

  log(`repo root: ${ROOT}`);
  assertExists(
    SRC_WRAPPER,
    "Expected .claude-skill/SKILL.md + references/ at the repo root."
  );
  assertExists(path.join(SRC_WRAPPER, "SKILL.md"));

  log("cleaning previous build...");
  rmrf(STAGE_DIR);
  fs.mkdirSync(STAGE_DIR, { recursive: true });

  log("staging Claude wrapper (SKILL.md + references/)...");
  copyRecursive(
    path.join(SRC_WRAPPER, "SKILL.md"),
    path.join(STAGE_DIR, "SKILL.md")
  );
  copyRecursive(
    path.join(SRC_WRAPPER, "references"),
    path.join(STAGE_DIR, "references")
  );

  log("staging single-source-of-truth files from repo root...");
  for (const name of ROOT_COPIES) {
    const src = path.join(ROOT, name);
    const dest = path.join(STAGE_DIR, name);
    copyRecursive(src, dest);
    log(`  + ${name}`);
  }

  fs.writeFileSync(
    path.join(STAGE_DIR, "README.md"),
    [
      "# TidyFactor Design — Claude Skill package",
      "",
      "Built from TidyFactor Skills-LAB — this package is a generated artifact.",
      "Do not hand-edit files here; edit the source in Skills-LAB/tidyfactor-design and rebuild.",
      "",
      "- `memory/`, `templates/`, `references/`, `brand.json` — identical to repo root.",
      "- `SKILL.md`, `references/` — the Claude-specific command wrapper.",
      "",
    ].join("\n")
  );

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  zipArchive(STAGE_DIR, OUT_FILE, DIST_DIR);

  const sizeKb = (fs.statSync(OUT_FILE).size / 1024).toFixed(1);
  log(`done → ${path.relative(ROOT, OUT_FILE)} (${sizeKb} KB)`);

  // Auto-sync to Skills-LAB root if located inside Skills-LAB
  const skillLabRoot = path.resolve(ROOT, "..");
  const skillLabTarget = path.join(skillLabRoot, `${SKILL_NAME}.skill`);
  if (path.basename(skillLabRoot) === "Skills-LAB") {
    fs.copyFileSync(OUT_FILE, skillLabTarget);
    log(`✓ Updated Skills-LAB root archive → ${path.relative(ROOT, skillLabTarget)}`);
  }
}

main();
