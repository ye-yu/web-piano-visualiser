const CHALK = require('chalk');
const DESC = "To connect to IO devices";

function call(args, stdout) {
  disconnectInput(stdout);
  disconnectOutput(stdout);
}

function disconnectInput(stdout) {
  const INP = require('../index').getGlobVar('input');
  if (!INP) {
    stdout.error(CHALK.red('ERROR:'), 'Input device is not available.');
    return;
  }

  INP.close();
  require('../index').setGlobVar('inputConnected', false);
  stdout.info(CHALK.green('INFO:'), 'Input device is succesfully disconnected.');
}

function disconnectOutput(stdout) {
  const OUT = require('../index').getGlobVar('output');
  if (!OUT) {
    stdout.error(CHALK.red('ERROR:'), 'Output device is not available.');
    return;
  }

  OUT.close();
  require('../index').setGlobVar('outputConnected', false);
  stdout.info(CHALK.green('INFO:'), 'Output device is succesfully disconnected.');
}

function help(args) {
  return `Usage: disconnect

Remove connection to input and output devices.`;
}

module.exports = {
  call: call,
  help: help,
  desc: DESC
};
