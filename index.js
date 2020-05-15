"use strict";

const EM = require('easymidi');
const GLOBAL_VAR = {
  "use": undefined
}
function init() {
  if (EM.getInputs().length < 1) {
    console.log("No inputs available.");
    return;
  }
  GLOBAL_VAR.use = new EM.Input(EM.getInputs()[0]);
  console.log(`Initialisation: Using ${EM.getInputs()[0]} as default midi input.`);
}

let stdin = process.openStdin();

stdin.addListener("data", function(d) {
  d = d.toString().trim().split();
  console.log(d);
});

init();
