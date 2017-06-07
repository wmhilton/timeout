#!/usr/bin/env node
'use strict';


const spawn = require('child_process').spawn;


const [timeout, command, ...args] = process.argv.slice(2);


const cp = spawn(command, args, {stdio: 'inherit'});


const watchdogTimer = setTimeout(() => {
  cp.kill();
  process.exit(1);
}, timeout * 1000);


cp.on('close', () => {
  clearTimeout(watchdogTimer);
  process.exit(0);
});
