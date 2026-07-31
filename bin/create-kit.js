#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
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
if (firstArg === 'add-skill' || firstArg === 'add-design-skill' || firstArg === 'skill') {
  process.argv.splice(2, 1);
  require('./add-skill.js');
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

const SCHOOLS = ['minimalist', 'brutalism', 'glassmorphism', 'neumorphism', 'swiss', 'luxury'];
const FOUNDATION_BY_NAME = new Map(FOUNDATIONS.map(f => [f.name, f]));

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
  console.log(chalk.cyan('  ║') + chalk.dim('  Code-native interactive prototyping (Figma alternative)  ') + chalk.cyan('║'));
  console.log(chalk.cyan('  ╚═══════════════════════════════════════════════════════╝'));
  console.log('');
}

function printHelp() {
  printBanner();
  console.log(`  ${chalk.bold('Usage:')}`);
  console.log(`    $ npx @alwkala/tidyfactor-design [project-dir] [options]\n`);
  console.log(`  ${chalk.bold('Subcommands:')}`);
  console.log(`    ${chalk.cyan('add-skill')}       Inject Agent Skill, rules & memory into an existing workspace\n`);
  console.log(`  ${chalk.bold('Options:')}`);
  console.log(`    ${chalk.cyan('--foundation=<name>')} Select CSS foundation (native|tailwind|daisyui|hybrid|shadcn|pico|bootstrap|alpine)`);
  console.log(`    ${chalk.cyan('--school=<name>')}     Select design school (minimalist|brutalism|glassmorphism|swiss|luxury)`);
  console.log(`    ${chalk.cyan('--palette=<image>')}   Extract brand color palette from logo/screenshot`);
  console.log(`    ${chalk.cyan('-y, --yes')}           Accept all defaults non-interactively`);
  console.log(`    ${chalk.cyan('-v, --version')}       Display version number`);
  console.log(`    ${chalk.cyan('-h, --help')}          Display this help message\n`);
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

function main() {
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
