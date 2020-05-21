const CHALK = require('chalk');
const DESC = "To list down status of the IO devices";

function call(args, stdout) {
  const INP = require('../index').getGlobVar('inputName', CHALK.yellow('UNSET'));
  const INP_STATUS = require('../index').getGlobVar('inputConnected', false) ? 'connected' : 'disconnected';
  const OUT = require('../index').getGlobVar('outputName', CHALK.yellow('UNSET'));
  const OUT_STATUS = require('../index').getGlobVar('outputConnected', false) ? 'connected' : 'disconnected';

  if(args[0] == 'json') {
    stdout.json({
      input: {
        name: INP,
        status: INP_STATUS
      },
      output: {
        name: OUT,
        status: OUT_STATUS
      }
    });
    return;
  }
  stdout.info(CHALK.green('Input device:'), `${INP}`, `(${CHALK.yellow(INP_STATUS)})`);
  stdout.info(CHALK.green('Output device:'), `${OUT}`, `(${CHALK.yellow(OUT_STATUS)})`);
}

function help(args) {
  return `Usage: status

List down status of the IO devices`;
}

module.exports = {
  call: call,
  help: help,
  desc: DESC
};
