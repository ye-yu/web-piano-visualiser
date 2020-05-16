'use strict';

const EM = require('easymidi');
const GLOBAL_VAR = {};
function init() {
  if (EM.getInputs().length < 1) {
    console.log('No inputs available.');
    return;
  }
  GLOBAL_VAR.use = new EM.Input(EM.getInputs()[0]);
  console.log(`Initialisation: Using ${EM.getInputs()[0]} as default midi input.`);
}

let stdin = process.openStdin();

stdin.addListener('data', function(d) {
  d = d.toString().trim().split(" ");
  require('./parse').parse(d);
});

function getEM() {
  return EM;
}

function getGlobVar(key, def = undefined) {
  return GLOBAL_VAR[key] || def;
}

function setGlobVar(key, value) {
  GLOBAL_VAR[key] = value;
}

init();

module.exports = {
  getEM: getEM,
  getGlobVar: getGlobVar,
  setGlobVar: setGlobVar
};
