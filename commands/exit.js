function call(args) {
  process.exit(args[0]);
}

module.exports = {
  call: call
};
