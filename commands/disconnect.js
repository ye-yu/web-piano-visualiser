const DESC = "To connect to IO devices";

function call(args) {
  disconnectInput();
  disconnectOutput();
}

function disconnectInput() {
  const INP = require('../index').getGlobVar('input');
  if (!INP) {
    console.error('Input device is not available.');
    return;
  }

  INP.close();
  console.info('Input device is succesfully disconnected.');
}

function disconnectOutput() {
  const OUT = require('../index').getGlobVar('output');
  if (!OUT) {
    console.error('Output device is not available.');
    return;
  }
  console.info('Output device is succesfully disconnected.');
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
