#!/usr/bin/env node
/**
 * tools/build-skill.js — TidyFactor Design Build & Packaging Tool
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SKILL_NAME = 'tidyfactor-design';
const REPO_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(REPO_ROOT, 'dist');
const STAGING_DIR = path.join(DIST_DIR, SKILL_NAME);
const SKILLS_LAB_ROOT = path.resolve(REPO_ROOT, '..');

const HOME = process.env.USERPROFILE || process.env.HOME;
const GLOBAL_CONFIG_SKILL = path.join(HOME, '.gemini', 'config', 'skills', SKILL_NAME);
const LOCAL_AGENT_SKILL = path.join(SKILLS_LAB_ROOT, '.agents', 'skills', SKILL_NAME);

function log(msg) {
  console.log(`[build-skill] ${msg}`);
}

function runValidation() {
  log('running release validation checks...');
  const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';
  execSync(`${pythonCmd} "${path.join(__dirname, 'validate_skill.py')}"`, { stdio: 'inherit' });
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      if (['node_modules', '.git', 'dist', '.agents'].includes(item)) continue;
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function zipDirectory(sourceDir, outZip) {
  const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';
  const pyScript = `import shutil, os; shutil.make_archive(r'''${outZip.replace(/\\/g, '/').replace(/\.skill$/, '')}''', 'zip', r'''${sourceDir.replace(/\\/g, '/')}''')`;
  execSync(`${pythonCmd} -c "${pyScript}"`);
  const generatedZip = outZip.replace(/\.skill$/, '.zip');
  if (generatedZip !== outZip) {
    if (fs.existsSync(outZip)) fs.unlinkSync(outZip);
    fs.renameSync(generatedZip, outZip);
  }
}

function build() {
  log(`repo root: ${REPO_ROOT}`);
  runValidation();

  log('cleaning previous build...');
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(STAGING_DIR, { recursive: true });

  const pkg = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'package.json'), 'utf-8'));
  const version = pkg.version;

  log('staging single-source-of-truth files from repo root...');
  const whitelist = [
    'SKILL.md',
    'manifest.json',
    'references',
    'memory',
    'templates',
    'scripts',
    'tools',
    'assets',
    'bin',
    'brand.json',
    '.tidyfactor',
    'package.json',
    'AGENTS.md',
    'README.md',
    'README.ar.md',
    'LICENSE',
    'CHANGELOG.md'
  ];

  for (const item of whitelist) {
    const srcPath = path.join(REPO_ROOT, item);
    if (fs.existsSync(srcPath)) {
      log(`  + ${item}`);
      copyRecursive(srcPath, path.join(STAGING_DIR, item));
    }
  }

  log('zipping skill archive...');
  const archiveName = `${SKILL_NAME}.skill`;
  const versionedArchiveName = `${SKILL_NAME}-v${version}.skill`;
  const archivePath = path.join(DIST_DIR, archiveName);
  const versionedArchivePath = path.join(DIST_DIR, versionedArchiveName);

  zipDirectory(STAGING_DIR, archivePath);
  fs.copyFileSync(archivePath, versionedArchivePath);

  const stats = fs.statSync(archivePath);
  log(`done → dist\\${archiveName} (${(stats.size / 1024).toFixed(1)} KB)`);
  log(`✓ Created versioned archive → dist\\${versionedArchiveName}`);

  // Copy to Skills-LAB root
  fs.copyFileSync(archivePath, path.join(SKILLS_LAB_ROOT, archiveName));
  fs.copyFileSync(versionedArchivePath, path.join(SKILLS_LAB_ROOT, versionedArchiveName));
  log(`✓ Updated Skills-LAB root archives → ${archiveName} & ${versionedArchiveName}`);

  // Cross-agent synchronization
  const targets = [LOCAL_AGENT_SKILL, GLOBAL_CONFIG_SKILL];
  for (const target of targets) {
    log(`synchronizing to target location: ${target}`);
    if (fs.existsSync(target)) {
      fs.rmSync(target, { recursive: true, force: true });
    }
    copyRecursive(STAGING_DIR, target);
  }
  log('✓ Completed cross-agent synchronization across all target locations.');
}

build();
