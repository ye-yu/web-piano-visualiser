function call(args) {
  process.exit(args[0]);
}

function help(args) {
  return `Usage: exit [exit code]

Exits program with exit code. Default code is 0.`;
}

module.exports = {
  call: call,
  help: help
};
