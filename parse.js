function parse(args) {
  try {
    const stdout = {
      info: console.info,
      error: console.error,
      log: console.log
    }
    require(`./commands/${args[0]}`).call(args.slice(1), stdout);
  } catch (err) {
    console.error(`Command not recognised: ${args.join(' ')}`, err);
  }
}

module.exports = {
  parse: parse
};
