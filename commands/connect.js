const DESC = "To connect to IO devices";

function call(args) {
  const INP = require('../index').getGlobVar('input');
  if (!INP) {
    console.error('Input device is not available.');
    return;
  }

  INP.on('noteon', params => {
    if (params.velocity == 0) {
      noteOff(params.note);
      return;
    }

    noteOn(params.note, params.velocity);
  });

  INP.on('noteoff', params => {
    noteOff(params.note);
  });

  INP.on('cc', params => {
    if (params.controller == 64) {
      sustain(params.value > 50);
    }
  });
}

function noteOn(note, velocity) {
  console.info(`Pressing key ${note} with velocity ${velocity}`);
}

function noteOff(note) {
  console.info(`Released key ${note}`);
}

function sustain(isOn) {
  if (isOn) {
    console.info('Sustain pedal is on.');
    return;
  }
  console.info('Sustain pedal is off.');
}


function help(args) {
  return `Usage: exit [exit code]

Establish connection to input and output devices. This
is to enable input and output reading.`;
}

module.exports = {
  call: call,
  help: help,
  desc: DESC
};
