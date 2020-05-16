const FS = require('fs');
const DESC = 'To display help messages';

function call(args) {
  if (args.length < 1) {
    console.log('List of commands');

    FS.readdir('./commands', function(err, items) {
      items.forEach(command => {
        command = command.split('.')[0];
        if (command == 'help') return;
        desc = require(`./${command}`).desc;
        console.info(`  ${command}\t\t${desc}`);
      });

      console.info(`  help\t\t${DESC}

For help on each command, do 'help <command name>'.`);
    });
  } else {
    try {
      let help = require(`./${args[0]}`).help(args.slice(1));
      console.info(help);
    } catch(err) {
      console.error('No help message available.');
    }
  }
}

module.exports = {
  call: call
};
