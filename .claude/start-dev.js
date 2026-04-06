#!/usr/bin/env node
// Launcher that sets PATH correctly before starting Next.js dev server
process.env.PATH = '/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:' + (process.env.PATH || '');
process.chdir('/Users/moritz/Desktop/karten-tricks.de/website');

const { spawn } = require('child_process');
const port = process.env.PORT || '3001';

const child = spawn(
  '/opt/homebrew/bin/node',
  ['node_modules/.bin/next', 'dev', '--webpack', '--port', port],
  {
    cwd: '/Users/moritz/Desktop/karten-tricks.de/website',
    env: process.env,
    stdio: 'inherit',
  }
);

child.on('exit', code => process.exit(code ?? 0));
