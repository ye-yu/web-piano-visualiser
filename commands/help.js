function call(args) {
  if (args.length < 1) {
    console.log('List of commands');
  } else {
    try {
      require(`./${args[0]}`).help(args.slice(1));
    } catch(err) {
      console.error('No help message available.');
    }
  }
}

module.exports = {
  call: call
};
