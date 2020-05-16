const DESC = "To connect to IO devices";

function call(args) {
  const INP = require('../index').getGlobVar('input');
  if (!INP) {
    console.error('Input device is not available.');
    return;
  }

  INP.on('noteon', params => {
    console.log(params);
  });

  INP.on('noteoff', params => {
    console.log(params);
  });

  INP.on('cc', params => {
    console.log(params);
  });
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
