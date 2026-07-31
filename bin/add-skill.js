#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/* Lightweight Zero-Dependency ANSI formatting */
const chalk = {
  cyan: (str) => `\x1b[36m${str}\x1b[0m`,
  green: (str) => `\x1b[32m${str}\x1b[0m`,
  yellow: (str) => `\x1b[33m${str}\x1b[0m`,
  red: (str) => `\x1b[31m${str}\x1b[0m`,
  bold: (str) => `\x1b[1m${str}\x1b[0m`,
  dim: (str) => `\x1b[2m${str}\x1b[0m`,
};

const PACKAGE_ROOT = path.resolve(__dirname, '..');
const pkg = require(path.join(PACKAGE_ROOT, 'package.json'));

function parseCliArgs() {
  const args = process.argv.slice(2);
  let flags = {
    help: false,
    version: false,
    force: false,
    yes: false,
  };

  for (const arg of args) {
    if (arg === '--help' || arg === '-h') {
      flags.help = true;
    } else if (arg === '--version' || arg === '-v') {
      flags.version = true;
    } else if (arg === '--force' || arg === '-f') {
      flags.force = true;
    } else if (arg === '--yes' || arg === '-y') {
      flags.yes = true;
    }
  }

  return flags;
}

function printBanner() {
  const v = `v${pkg.version}`;
  console.log('');
  console.log(chalk.cyan('  ╔═══════════════════════════════════════════════════════╗'));
  console.log(chalk.cyan('  ║') + chalk.bold('  🤖  TidyFactor Design Skill Installer  ') + chalk.dim(v.padEnd(7)) + ' ' + chalk.cyan('║'));
  console.log(chalk.cyan('  ║') + chalk.dim('  Equip Antigravity, Claude Code, Cursor & Windsurf     ') + chalk.cyan('║'));
  console.log(chalk.cyan('  ╚═══════════════════════════════════════════════════════╝'));
  console.log('');
}

function printHelp() {
  printBanner();
  console.log(`  ${chalk.bold('Usage:')}`);
  console.log(`    $ npx @alwkala/tidyfactor-design add-skill [options]\n`);
  console.log(`  ${chalk.bold('Options:')}`);
  console.log(`    ${chalk.cyan('-f, --force')}       Overwrite existing skill files with latest v${pkg.version}`);
  console.log(`    ${chalk.cyan('-y, --yes')}         Accept all installation steps non-interactively`);
  console.log(`    ${chalk.cyan('-v, --version')}     Display installer version number`);
  console.log(`    ${chalk.cyan('-h, --help')}        Display this help message\n`);
  console.log(`  ${chalk.bold('Supported CSS Foundations:')}`);
  console.log(`    • ${chalk.cyan('native')}    (Native CSS)     — Pure CSS custom properties & semantic classes`);
  console.log(`    • ${chalk.cyan('tailwind')}  (Tailwind CDN)   — Utility-first class mapping`);
  console.log(`    • ${chalk.cyan('daisyui')}   (daisyUI CDN)    — Component library themed via tokens`);
  console.log(`    • ${chalk.cyan('hybrid')}    (Hybrid)         — Composite app widgets + Native brand styling`);
  console.log(`    • ${chalk.cyan('shadcn')}    (shadcn/ui)      — Primitive component token mappings`);
  console.log(`    • ${chalk.cyan('pico')}      (Pico CSS v2)    — Minimalist semantic CSS foundation`);
  console.log(`    • ${chalk.cyan('bootstrap')} (Bootstrap 5.3)  — Enterprise utility & component styling`);
  console.log(`    • ${chalk.cyan('alpine')}    (Alpine + TW)    — Micro-interactions + Tailwind v4\n`);
}

function printSuccessSummary() {
  const v = `v${pkg.version}`;
  console.log('');
  console.log(chalk.green('  ╔═══════════════════════════════════════════════════════╗'));
  console.log(chalk.green('  ║') + chalk.bold(`  ✅  Design Skill Installed Successfully! (${v})`.padEnd(54)) + chalk.green('║'));
  console.log(chalk.green('  ╠═══════════════════════════════════════════════════════╣'));
  console.log(chalk.green('  ║') + `  📂  ${chalk.cyan('.agents/skills/tidyfactor-design/SKILL.md')}`.padEnd(62) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  📚  ${chalk.cyan('.agents/skills/tidyfactor-design/references/')} ${chalk.dim('(24 commands)')}`.padEnd(62) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  🧰  ${chalk.cyan('memory/')} ${chalk.dim('(15 design memory files)')}`.padEnd(62) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  🎨  ${chalk.cyan('templates/')} ${chalk.dim('(8 CSS foundation templates)')}`.padEnd(62) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  🤖  ${chalk.cyan('.claude-skill/')} ${chalk.dim('(Claude Code wrapper)')}`.padEnd(62) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  📄  ${chalk.cyan('AGENTS.md')} ${chalk.dim('(Workspace rules & routing table)')}`.padEnd(62) + chalk.green('║'));
  console.log(chalk.green('  ╠═══════════════════════════════════════════════════════╣'));
  console.log(chalk.green('  ║') + chalk.bold('  🚀  7 UI Design Lifecycle Stages Supported:           ') + chalk.green('║'));
  console.log(chalk.green('  ║') + `  1. ${chalk.cyan('Discovery')}    — study, brief`.padEnd(60) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  2. ${chalk.cyan('Foundation')}   — init, brand, typography, school, tokens`.padEnd(60) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  3. ${chalk.cyan('Architecture')} — layout, nav-footer, page, dashboard`.padEnd(60) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  4. ${chalk.cyan('Components')}   — components, states`.padEnd(60) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  5. ${chalk.cyan('Motion')}       — motion, flow, i18n`.padEnd(60) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  6. ${chalk.cyan('Quality')}      — perf, audit, clone, retrofit`.padEnd(60) + chalk.green('║'));
  console.log(chalk.green('  ║') + `  7. ${chalk.cyan('Delivery')}     — handoff, deploy`.padEnd(60) + chalk.green('║'));
  console.log(chalk.green('  ╚═══════════════════════════════════════════════════════╝'));
  console.log('');
  console.log(`  ${chalk.bold('✨ Your AI Agent is now fully empowered!')} ${chalk.dim('Prompt your agent with: "study", "brief", or "init"')}`);
  console.log('');
}

function copyDirectory(src, dest, force) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const sPath = path.join(src, item);
    const dPath = path.join(dest, item);
    if (fs.statSync(sPath).isDirectory()) {
      copyDirectory(sPath, dPath, force);
    } else {
      if (!fs.existsSync(dPath) || force) {
        fs.copyFileSync(sPath, dPath);
      }
    }
  }
}

function main() {
  const flags = parseCliArgs();

  if (flags.version) {
    console.log(`v${pkg.version}`);
    process.exit(0);
  }

  if (flags.help) {
    printHelp();
    process.exit(0);
  }

  printBanner();

  const cwd = process.cwd();

  console.log(chalk.cyan('  📦 Injecting TidyFactor Design Agent Skill files...'));

  const agentsSrc = path.join(PACKAGE_ROOT, '.agents');
  const agentsDest = path.join(cwd, '.agents');
  copyDirectory(agentsSrc, agentsDest, flags.force);

  const claudeSrc = path.join(PACKAGE_ROOT, '.claude-skill');
  const claudeDest = path.join(cwd, '.claude-skill');
  copyDirectory(claudeSrc, claudeDest, flags.force);

  const memSrc = path.join(PACKAGE_ROOT, 'memory');
  const memDest = path.join(cwd, 'memory');
  copyDirectory(memSrc, memDest, flags.force);

  const tplSrc = path.join(PACKAGE_ROOT, 'templates');
  const tplDest = path.join(cwd, 'templates');
  copyDirectory(tplSrc, tplDest, flags.force);

  const agentsMdSrc = path.join(PACKAGE_ROOT, 'AGENTS.md');
  const agentsMdDest = path.join(cwd, 'AGENTS.md');
  if (fs.existsSync(agentsMdSrc) && (!fs.existsSync(agentsMdDest) || flags.force)) {
    fs.copyFileSync(agentsMdSrc, agentsMdDest);
  }

  printSuccessSummary();
}

main();
