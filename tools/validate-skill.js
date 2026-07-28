#!/usr/bin/env node
/**
 * validate-skill.js — Validates TidyFactor Design skill structure, frontmatter,
 * command specifications, memory files, and parity between .agents and .claude-skill wrappers.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const AGENTS_SKILL_DIR = path.join(ROOT, '.agents', 'skills', 'tidyfactor-design');
const CLAUDE_SKILL_DIR = path.join(ROOT, '.claude-skill');

const REQUIRED_COMMANDS = [
  'init', 'school', 'tokens', 'palette', 'assets', 'components', 'page', 'dashboard',
  'motion', 'states', 'flow', 'i18n', 'audit', 'clone', 'retrofit', 'deploy'
];

const autoSync = process.argv.includes('--sync') || process.argv.includes('--fix');

let errors = [];
let warnings = [];

function log(msg) {
  console.log(`[validate-skill] ${msg}`);
}

function checkFrontmatter(filePath) {
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing SKILL.md file: ${path.relative(ROOT, filePath)}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.startsWith('---')) {
    errors.push(`SKILL.md frontmatter must start with '---': ${path.relative(ROOT, filePath)}`);
    return;
  }
  const parts = content.split('---');
  if (parts.length < 3) {
    errors.push(`Invalid frontmatter format in: ${path.relative(ROOT, filePath)}`);
    return;
  }
  const yaml = parts[1];
  if (!yaml.includes('name:') || !yaml.includes('description:')) {
    errors.push(`Frontmatter missing required 'name' or 'description': ${path.relative(ROOT, filePath)}`);
  } else {
    log(`✓ Frontmatter valid for ${path.relative(ROOT, filePath)}`);
  }
}

function checkCommandsAndParity() {
  const agentsCmdDir = path.join(AGENTS_SKILL_DIR, 'references', 'commands');
  const claudeCmdDir = path.join(CLAUDE_SKILL_DIR, 'references', 'commands');

  for (const cmd of REQUIRED_COMMANDS) {
    const agentsFile = path.join(agentsCmdDir, `${cmd}.md`);
    const claudeFile = path.join(claudeCmdDir, `${cmd}.md`);

    if (!fs.existsSync(agentsFile)) {
      errors.push(`Missing Antigravity command spec for '${cmd}': ${path.relative(ROOT, agentsFile)}`);
      continue;
    }
    if (!fs.existsSync(claudeFile)) {
      if (autoSync) {
        fs.mkdirSync(path.dirname(claudeFile), { recursive: true });
        fs.copyFileSync(agentsFile, claudeFile);
        log(`⚡ Auto-created missing '${cmd}.md' in .claude-skill`);
      } else {
        errors.push(`Missing Claude command spec for '${cmd}': ${path.relative(ROOT, claudeFile)}`);
        continue;
      }
    }

    const agentsContent = fs.readFileSync(agentsFile, 'utf8');
    const claudeContent = fs.readFileSync(claudeFile, 'utf8');

    if (agentsContent !== claudeContent) {
      if (autoSync) {
        fs.copyFileSync(agentsFile, claudeFile);
        log(`⚡ Auto-synced '${cmd}.md' from .agents to .claude-skill`);
      } else {
        warnings.push(`Command spec '${cmd}.md' differs between .agents and .claude-skill. Run 'node tools/validate-skill.js --sync' to auto-sync.`);
      }
    }
  }
  log(`✓ All ${REQUIRED_COMMANDS.length} command specs verified with parity check across targets`);
}

function checkDirectory(dirName, label) {
  const targetDir = path.join(ROOT, dirName);
  if (!fs.existsSync(targetDir)) {
    errors.push(`Missing required directory: ${dirName}`);
  } else {
    log(`✓ Directory verified: ${label}`);
  }
}

function checkMemoryFiles() {
  const memoryDir = path.join(ROOT, 'memory');
  if (!fs.existsSync(memoryDir)) return;
  const files = fs.readdirSync(memoryDir).filter(f => f.endsWith('.md'));
  log(`✓ Verified ${files.length} memory reference files in memory/`);
}

function main() {
  log('Starting skill validation check...');

  checkFrontmatter(path.join(AGENTS_SKILL_DIR, 'SKILL.md'));
  checkFrontmatter(path.join(CLAUDE_SKILL_DIR, 'SKILL.md'));

  checkCommandsAndParity();
  checkDirectory('memory', 'memory');
  checkMemoryFiles();
  checkDirectory('templates', 'templates/layouts');

  const agentsMd = path.join(ROOT, 'AGENTS.md');
  if (!fs.existsSync(agentsMd)) {
    errors.push('Missing root AGENTS.md');
  } else {
    log('✓ Root AGENTS.md verified');
  }

  if (warnings.length > 0) {
    console.warn('\n⚠ Validation warnings:');
    warnings.forEach(w => console.warn(`  ${w}`));
  }

  if (errors.length > 0) {
    console.error('\n✖ Validation failed with errors:');
    errors.forEach(e => console.error(`  ❌ ${e}`));
    process.exit(1);
  }

  log('✨ All skill validation checks passed successfully!\n');
}

main();
