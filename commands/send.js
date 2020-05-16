const DESC = "To connect to IO devices";

function call(args) {
  const OUT = require('../index').getGlobVar('output');
  if (!OUT) {
    console.error('Output device is not available.');
    return;
  }
  console.info('Output is not implemented yet.');
}

function playNote(note, duration) {

}

function setSustainPedal(status) {

}


function help(args) {
  return `Usage:
  send note <note> <duration>
  send sustain [on|off]

Send midi events to the output device.`;
}

module.exports = {
  call: call,
  help: help,
  desc: DESC
};
