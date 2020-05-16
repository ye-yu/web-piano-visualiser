const CHALK = require('chalk');
const DESC = "To list down status of the IO devices";

function call(args) {
  const INP = require('../index').getGlobVar('inputName', CHALK.yellow('UNSET'));
  const INP_STATUS = require('../index').getGlobVar('inputConnected', false) ? 'connected' : 'disconnected';
  const OUT = require('../index').getGlobVar('outputName', CHALK.yellow('UNSET'));
  const OUT_STATUS = require('../index').getGlobVar('outputConnected', false) ? 'connected' : 'disconnected';
  console.info(CHALK.green('Input device:'), `${INP}`, `(${CHALK.yellow(INP_STATUS)})`);
  console.info(CHALK.green('Output device:'), `${OUT}`, `(${CHALK.yellow(OUT_STATUS)})`);
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
