const CHALK = require('chalk');
const DESC = "To connect to IO devices";

function call(args, stdout) {
  const INP = require('../index').getGlobVar('input');
  if (!INP) {
    stdout.error(CHALK.red('ERROR:'), 'Input device is not available.');
    return;
  }

  INP.on('noteon', params => {
    if (params.velocity == 0) {
      noteOff(params.note, stdout);
      return;
    }

    noteOn(params.note, params.velocity, stdout);
  });

  INP.on('noteoff', params => {
    noteOff(params.note, stdout);
  });

  INP.on('cc', params => {
    if (params.controller == 64) {
      sustain(params.value > 50, stdout);
    }
  });

  require('../index').setGlobVar('inputConnected', true);
  stdout.info(CHALK.green('INFO:'), 'IO device is succesfully connected.');
}

function noteOn(note, velocity, stdout) {
  stdout.info(CHALK.green('INFO:'), `Pressing key ${note} with velocity ${velocity}`);
}

function noteOff(note, stdout) {
  stdout.info(CHALK.green('INFO:'), `Released key ${note}`);
}

function sustain(isOn, stdout) {
  if (isOn) {
    stdout.info(CHALK.green('INFO:'), 'Sustain pedal is on.');
    return;
  }
  stdout.info(CHALK.green('INFO:'), 'Sustain pedal is off.');
}


function help(args) {
  return `Usage: connect

Establish connection to input and output devices. This
is to enable input and output reading.`;
}

module.exports = {
  call: call,
  help: help,
  desc: DESC
};
