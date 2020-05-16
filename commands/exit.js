const DESC = "To exit program with exit code";

function call(args) {
  process.exit(args[0]);
}

function help(args) {
  return `Usage: exit [exit code]

Exit program with exit code. Default code is 0.`;
}

module.exports = {
  call: call,
  help: help,
  desc: DESC
};
