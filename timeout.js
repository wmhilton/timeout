#!/usr/bin/env node
'use strict';


const spawn = require('child_process').spawn;


const end = error => {
  if (error) {
    process.exit(1);
  }
  process.exit(0);
};
process.on('uncaughtException', end);
process.on('unhandledRejection', end);


const [timeout, command, ...args] = process.argv.slice(2);


const cp = spawn(command, args, {stdio: 'inherit'});


const watchdogTimer = setTimeout(() => {
  cp.kill();
  process.exit(1);
}, timeout * 1000);


cp.on('close', (code) => {
  clearTimeout(watchdogTimer);
  process.exit(code);
});
