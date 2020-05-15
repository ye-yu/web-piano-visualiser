function call(args) {
  if (args.length < 1) {
    console.log('List of commands');
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
