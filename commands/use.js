const EM = require('../index').getEM();
const DESC = 'To set program input and output device';

function call(args) {
  if (args[0] == 'input') {
    setInputDev(args[1], args[2]);
    return;
  }
  if (args[0] == 'output') {
    setOutputDev(args[1], args[2]);
    return;
  }
  console.error('Set input or output device.');
}

function setInputDev(option, value) {
  const PREV_INP = require('../index').getGlobVar('input');
  if (PREV_INP) {
    PREV_INP.close();
  }

  if (option == 'index') {
    // get name from index
    value = +value;
    value = EM.getInputs()[value];
    option = 'name';
  }
  if (option == 'name') {
    input = new EM.Input(value);
    try {
      require('../index').setGlobVar('input', new EM.Input(value));
      console.info(`Successfully set input device to ${value}.`);
    } catch (err) {
      console.error(err);
    }
    return;
  }
  console.error('Set index from list or name of device.');
}

function setOutputDev(option, value) {
  const PREV_OUT = require('../index').getGlobVar('output');
  if (PREV_OUT) {
    PREV_OUT.close();
  }
  if (option == 'index') {
    // get name from index
    value = +value;
    value = EM.getOutputs()[value];
    option = 'name';
  }
  if (option == 'name') {
    require('../index').setGlobVar('output', new EM.Output(value));
    console.info(`Successfully set output device to ${value}.`);
    return;
  }
  console.error('Set index from list or name of device.');
}

function help(args) {
  return `Usage:
  use input index|name <index or name of device>
  use output index|name <index or name of device>

Set program input and output device`;
}

module.exports = {
  call: call,
  help: help,
  desc: DESC
};
