function call(args) {
  var i=0;
  if (args[0] === 'input' || args[0] === undefined) {
    console.log('Input devices:');
    require('../index').getEM().getInputs().forEach(inp => {
      console.log(`  [${i++}] ${inp}`);
    });
  } else if (args[0] === 'output') {
    console.log('Output devices:');
    require('../index').getEM().getOutputs().forEach(inp => {
      console.log(`  [${i++}] ${inp}`);
    });
  } else {
    console.log(`Invalid args: ${args.join(' ')}`);
  }
}

function help() {
  return `Usage:
  list
  list [input|output]

List down input or output devices. Input devices will be listed
by default if there are no args provided.`;
}

module.exports = {
  call: call,
  help: help
};
