#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

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

/* Subcommand delegation */
const firstArg = process.argv[2];
const SUBCOMMANDS_ADD = new Set(['add-skill', 'add-design-skill', 'skill', 'install-skill']);
const SUBCOMMANDS_REMOVE = new Set(['remove-skill', 'remove-design-skill', 'uninstall-skill', 'clean-skill']);

if (firstArg && SUBCOMMANDS_ADD.has(firstArg.toLowerCase())) {
  process.argv.splice(2, 1);
  require('./add-skill.js');
  process.exit(0);
}

if (firstArg && SUBCOMMANDS_REMOVE.has(firstArg.toLowerCase())) {
  process.argv.splice(2, 1);
  require('./remove-skill.js');
  process.exit(0);
}

const FOUNDATIONS = [
  {
    name:  'native',
    emoji: '🎨',
    label: 'Native CSS',
    desc:  'Pure CSS custom properties & semantic component classes (zero dependencies)',
  },
  {
    name:  'tailwind',
    emoji: '⚡',
    label: 'Tailwind Utility',
    desc:  'Tailwind CDN with utility-first class mapping',
  },
  {
    name:  'daisyui',
    emoji: '🌼',
    label: 'daisyUI Components',
    desc:  'Tailwind CDN + daisyUI component library themed via tokens',
  },
  {
    name:  'hybrid',
    emoji: '🔀',
    label: 'Hybrid Foundation',
    desc:  'daisyUI composite app widgets + Native CSS signature brand styling',
  },
  {
    name:  'shadcn',
    emoji: '📦',
    label: 'shadcn/ui Primitives',
    desc:  'Tailwind v4 + Radix UI accessible primitive tokens & components',
  },
  {
    name:  'pico',
    emoji: '🌱',
    label: 'Pico CSS v2',
    desc:  'Semantic classless/lightweight CSS foundation for minimalist sites',
  },
  {
    name:  'bootstrap',
    emoji: '🅱️',
    label: 'Bootstrap 5.3',
    desc:  'Enterprise-ready CSS custom properties & native dark mode themes',
  },
  {
    name:  'alpine',
    emoji: '🏔️',
    label: 'Alpine + Tailwind',
    desc:  'Alpine.js micro-interactions + Tailwind v4 utility engine',
  },
];

const SCHOOLS = [
  'minimalist',
  'brutalism',
  'glassmorphism',
  'neumorphism',
  'swiss',
  'luxury',
  'bauhaus',
  'industrial',
  'bento',
  'aurora',
  'cyberpunk',
  'claymorphism'
];

const FOUNDATION_BY_NAME = new Map(FOUNDATIONS.map(f => [f.name, f]));

function isInteractiveTerminal() {
  return (
    Boolean(process.stdin.isTTY) &&
    Boolean(process.stdout.isTTY) &&
    !process.env.CI &&
    !process.env.AGENT_MODE &&
    process.env.NO_PROMPT !== '1'
  );
}

function parseCliArgs() {
  const args = process.argv.slice(2);
  const positionalArgs = [];
  let flags = {
    foundation: undefined,
    school: undefined,
    palette: undefined,
    yes: false,
    help: false,
    version: false,
  };

  for (const arg of args) {
    if (arg === '--help' || arg === '-h') {
      flags.help = true;
    } else if (arg === '--version' || arg === '-v') {
      flags.version = true;
    } else if (arg.startsWith('--foundation=')) {
      flags.foundation = arg.split('=')[1];
    } else if (arg.startsWith('--school=')) {
      flags.school = arg.split('=')[1];
    } else if (arg.startsWith('--palette=')) {
      flags.palette = arg.split('=')[1];
    } else if (arg === '--yes' || arg === '-y') {
      flags.yes = true;
    } else if (!arg.startsWith('--')) {
      positionalArgs.push(arg);
    }
  }

  const targetDirArg = positionalArgs.length > 0 ? positionalArgs.join(' ') : null;

  return { targetDirArg, flags };
}

function printBanner() {
  const v = `v${pkg.version}`;
  console.log('');
  console.log(chalk.cyan('  ╔═══════════════════════════════════════════════════════╗'));
  console.log(chalk.cyan('  ║') + chalk.bold('  🎨  TidyFactor Design CLI  ') + chalk.dim(v.padEnd(7)) + '            ' + chalk.cyan('║'));
  console.log(chalk.cyan('  ║') + chalk.dim('  Code-native UI design engine & anti-slop system suite   ') + chalk.cyan('║'));
  console.log(chalk.cyan('  ║') + chalk.green('  🌐  RTL & Bilingual Ready (El Messiri / Tajawal)        ') + chalk.cyan('║'));
  console.log(chalk.cyan('  ╚═══════════════════════════════════════════════════════╝'));
  console.log('');
}

function printHelp() {
  printBanner();
  console.log(`  ${chalk.bold('Usage:')}`);
  console.log(`    $ npx @tidyfactor/cli-design [project-dir] [options]\n`);
  console.log(`  ${chalk.bold('Subcommands:')}`);
  console.log(`    ${chalk.cyan('add-skill')}       Inject Agent Skill, rules & memory into an existing workspace\n`);
  console.log(`  ${chalk.bold('Options:')}`);
  console.log(`    ${chalk.cyan('--foundation=<name>')} Select CSS foundation (native|tailwind|daisyui|hybrid|shadcn|pico|bootstrap|alpine)`);
  console.log(`    ${chalk.cyan('--school=<name>')}     Select design school (minimalist|brutalism|glassmorphism|swiss|luxury|bento|cyberpunk)`);
  console.log(`    ${chalk.cyan('--palette=<image>')}   Extract brand color palette from logo/screenshot`);
  console.log(`    ${chalk.cyan('-y, --yes')}           Accept all defaults non-interactively`);
  console.log(`    ${chalk.cyan('-v, --version')}       Display version number`);
  console.log(`    ${chalk.cyan('-h, --help')}          Display this help message\n`);
}

function askQuestion(rl, query) {
  return new Promise((resolve) => rl.question(query, (ans) => resolve(ans.trim())));
}

async function runInteractiveWizard(targetDir, foundation, school, palette) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Handle SIGINT (Ctrl+C) gracefully
  rl.on('SIGINT', () => {
    console.log(chalk.red('\n\n  ✖ Operation cancelled.\n'));
    rl.close();
    process.exit(0);
  });

  console.log(chalk.cyan('  🧙 Interactive TidyFactor Design Wizard\n'));

  // 1. Target Directory Prompt
  const dirAns = await askQuestion(rl, chalk.bold(`  [1/4] Target Directory [${targetDir}]: `));
  if (dirAns) {
    targetDir = dirAns;
  }
  console.log(chalk.green(`  ✓ Target Directory: ${targetDir}`));

  // 2. CSS Foundation Prompt
  console.log(chalk.bold('\n  [2/4] Select CSS Foundation:'));
  FOUNDATIONS.forEach((f, idx) => {
    const defaultTag = f.name === foundation ? chalk.green(' (default)') : '';
    console.log(`     ${chalk.cyan(`[${idx + 1}]`)} ${f.emoji} ${f.label.padEnd(16)} — ${chalk.dim(f.desc)}${defaultTag}`);
  });

  let validFound = false;
  while (!validFound) {
    const foundAns = await askQuestion(rl, chalk.bold(`     Choose [1-${FOUNDATIONS.length}] (Enter for default): `));
    if (!foundAns) {
      validFound = true;
    } else {
      const foundIdx = parseInt(foundAns, 10) - 1;
      if (!isNaN(foundIdx) && FOUNDATIONS[foundIdx]) {
        foundation = FOUNDATIONS[foundIdx].name;
        validFound = true;
      } else {
        console.log(chalk.yellow(`     ⚠ Invalid choice. Please select a number between 1 and ${FOUNDATIONS.length}.`));
      }
    }
  }
  const chosenF = FOUNDATION_BY_NAME.get(foundation);
  console.log(chalk.green(`  ✓ Foundation Selected: ${chosenF.emoji} ${chosenF.label}`));

  // 3. Design School Prompt
  console.log(chalk.bold('\n  [3/4] Select Visual Design School:'));
  SCHOOLS.forEach((s, idx) => {
    const defaultTag = s === school ? chalk.green(' (default)') : '';
    console.log(`     ${chalk.cyan(`[${idx + 1}]`.padEnd(5))} ${s.padEnd(16)}${defaultTag}`);
  });

  let validSchool = false;
  while (!validSchool) {
    const schoolAns = await askQuestion(rl, chalk.bold(`     Choose [1-${SCHOOLS.length}] (Enter for default): `));
    if (!schoolAns) {
      validSchool = true;
    } else {
      const schoolIdx = parseInt(schoolAns, 10) - 1;
      if (!isNaN(schoolIdx) && SCHOOLS[schoolIdx]) {
        school = SCHOOLS[schoolIdx];
        validSchool = true;
      } else {
        console.log(chalk.yellow(`     ⚠ Invalid choice. Please select a number between 1 and ${SCHOOLS.length}.`));
      }
    }
  }
  console.log(chalk.green(`  ✓ Design School Selected: ${school}`));

  // 4. Color Palette Extraction Prompt
  const palAns = await askQuestion(rl, chalk.bold(`\n  [4/4] Path to brand logo/image to extract colors (optional, press Enter to skip): `));
  if (palAns && fs.existsSync(palAns)) {
    palette = palAns;
    console.log(chalk.green(`  ✓ Palette Image Locked: ${palette}`));
  } else if (palAns) {
    console.log(chalk.yellow(`  ⚠ Image file "${palAns}" not found. Skipping extraction.`));
  }

  rl.close();
  console.log('');
  return { targetDir, foundation, school, palette };
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const sPath = path.join(src, item);
    const dPath = path.join(dest, item);
    if (fs.statSync(sPath).isDirectory()) {
      copyDirectory(sPath, dPath);
    } else {
      fs.copyFileSync(sPath, dPath);
    }
  }
}

async function main() {
  const { targetDirArg, flags } = parseCliArgs();

  if (flags.version) {
    console.log(`v${pkg.version}`);
    process.exit(0);
  }

  if (flags.help) {
    printHelp();
    process.exit(0);
  }

  printBanner();

  let targetDir = targetDirArg || '.';
  let foundation = flags.foundation || 'native';
  let school = flags.school || 'minimalist';

  // Interactive Wizard Trigger if live interactive terminal & no skip flags passed
  const isInteractive = isInteractiveTerminal() && !flags.yes && !flags.foundation && !flags.school;
  if (isInteractive) {
    const wizardRes = await runInteractiveWizard(targetDir, foundation, school, flags.palette);
    targetDir = wizardRes.targetDir;
    foundation = wizardRes.foundation;
    school = wizardRes.school;
    flags.palette = wizardRes.palette;
  }

  if (!FOUNDATION_BY_NAME.has(foundation)) {
    console.log(chalk.yellow(`⚠ Unknown foundation "${foundation}", falling back to "native".`));
    foundation = 'native';
  }

  if (!SCHOOLS.includes(school)) {
    school = 'minimalist';
  }

  const chosenFound = FOUNDATION_BY_NAME.get(foundation);
  const targetPath = path.resolve(process.cwd(), targetDir);

  console.log(chalk.green(`  🚀 Scaffolding TidyFactor Design project in ${chalk.bold(targetPath)}`));
  console.log(chalk.dim(`     Foundation: ${chosenFound.emoji} ${chosenFound.label} (${chosenFound.name})`));
  console.log(chalk.dim(`     Design School: ${school}\n`));

  fs.mkdirSync(targetPath, { recursive: true });

  // 1. Copy design system & prototype templates
  const templatesDir = path.join(PACKAGE_ROOT, 'templates');
  if (fs.existsSync(templatesDir)) {
    copyDirectory(templatesDir, targetPath);
  }

  // 2. Copy brand.json v2
  const defaultBrand = path.join(PACKAGE_ROOT, 'brand.json');
  const targetBrand = path.join(targetPath, 'brand.json');
  if (fs.existsSync(defaultBrand) && !fs.existsSync(targetBrand)) {
    fs.copyFileSync(defaultBrand, targetBrand);
  }

  // 3. Auto-inject AI Agent Skill & Rules (.agents, .claude-skill, memory, AGENTS.md)
  console.log(chalk.cyan('  🤖 Auto-injecting AI Agent Skill & Design Decision Engine...'));
  copyDirectory(path.join(PACKAGE_ROOT, '.agents'), path.join(targetPath, '.agents'));
  copyDirectory(path.join(PACKAGE_ROOT, '.claude-skill'), path.join(targetPath, '.claude-skill'));
  copyDirectory(path.join(PACKAGE_ROOT, 'memory'), path.join(targetPath, 'memory'));
  
  const agentsMdSrc = path.join(PACKAGE_ROOT, 'AGENTS.md');
  const agentsMdDest = path.join(targetPath, 'AGENTS.md');
  if (fs.existsSync(agentsMdSrc) && !fs.existsSync(agentsMdDest)) {
    fs.copyFileSync(agentsMdSrc, agentsMdDest);
  }

  // 4. Handle --palette extraction if provided
  if (flags.palette && fs.existsSync(flags.palette)) {
    console.log(chalk.cyan(`  🎨 Extracting color palette from ${flags.palette}...`));
    const extractScript = path.join(PACKAGE_ROOT, 'scripts', 'extract_palette.py');
    try {
      execSync(`python "${extractScript}" "${flags.palette}" --json "${targetBrand}"`, { stdio: 'inherit' });
    } catch (err) {
      console.log(chalk.yellow('⚠ Palette extraction skipped (Python/Pillow not found).'));
    }
  }

  console.log(chalk.green('\n  ✅ Project & AI Skill scaffolded successfully!'));
  console.log('');
  console.log(`  ${chalk.bold('Next Steps:')}`);
  if (targetDir !== '.') {
    console.log(`    $ cd "${targetDir}"`);
  }
  console.log(`    $ python -m http.server 8123                  # Preview interactive prototype in browser\n`);
}

main();
