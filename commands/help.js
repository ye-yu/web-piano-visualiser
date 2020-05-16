const CHALK = require('chalk');
const PAD = 15;
const FS = require('fs');
const DESC = 'To display help messages';

function call(args) {
  if (args.length < 1) {
    console.log(CHALK.green('List of commands:'));

    FS.readdir('./commands', function(err, items) {
      items.forEach(command => {
        command = command.split('.')[0];
        if (command == 'help') return;
        desc = require(`./${command}`).desc;
        console.info(`  ${CHALK.yellow(command.padEnd(PAD))}${desc}`);
      });

      console.info(`  ${CHALK.yellow('help'.padEnd(PAD))}${DESC}

Do ${CHALK.yellow('help')} <command name> for help on each command.`);
    });
  } else {
    try {
      let help = require(`./${args[0]}`).help(args.slice(1));
      console.info(help);
    } catch(err) {
      console.error(CHALK.red('ERROR:'), 'No help message available.');
    }
  }
}

module.exports = {
  call: call
};
