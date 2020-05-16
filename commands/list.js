const DESC = 'To list down IO devices.';

function call(args) {
  var i=0;

  if (args[0] === 'input' || args[0] === undefined) {
    console.info('Input devices:');
    require('../index').getEM().getInputs().forEach(inp => {
      console.info(`  [${i++}] ${inp}`);
    });
    return;
  }

  if (args[0] === 'output') {
    console.info('Output devices:');
    require('../index').getEM().getOutputs().forEach(inp => {
      console.info(`  [${i++}] ${inp}`);
    });
    return;
  }

  console.error(`Invalid args: ${args.join(' ')}`);
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
  help: help,
  desc: DESC
};
