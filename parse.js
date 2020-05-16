function parse(args) {
  try {
    require(`./commands/${args[0]}`).call(args.slice(1));
  } catch (err) {
    console.error(`Command not recognised: ${args.join(' ')}`, err);
  }
}

module.exports = {
  parse: parse
};
