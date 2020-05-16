const CHALK = require('chalk');
const DESC = 'To list down IO devices.';

function call(args, stdout) {
  var i=0;
  const inJson = args[1] === 'json';

  if (args[0] === 'input' || args[0] === undefined) {
    if (!inJson) {
      stdout.info(CHALK.green('Input devices:'));
      require('../index').getEM().getInputs().forEach(inp => {
        stdout.info(CHALK.yellow(`  [${i++}]`), ` ${inp}`);
      });
      return;
    }

    stdout.json(require('../index').getEM().getInputs());
    return;
  }

  if (args[0] === 'output') {
    if (!inJson) {
      stdout.info(CHALK.green('Output devices:'));
      require('../index').getEM().getOutputs().forEach(out => {
        stdout.info(CHALK.yellow(`  [${i++}]`), ` ${out}`);
      });
    }

    stdout.json(require('../index').getEM().getOutputs());
    return;
  }

  stdout.error(CHALK.red('ERROR:'), `Invalid args: ${args.join(' ')}`);
}

function help() {
  return `Usage:
  list
  list [input|output] [json]

List down input or output devices. Input devices will be listed
by default if there are no args provided.`;
}

module.exports = {
  call: call,
  help: help,
  desc: DESC
};
