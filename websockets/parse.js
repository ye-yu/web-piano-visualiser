function parse(args, ws) {
  const stdout = {
    info: (...arguments) => ws.send(formJSONStringForConsole("info", arguments)),
    error: (...arguments) => ws.send(formJSONStringForConsole("error", arguments)),
    log: (...arguments) => ws.send(formJSONStringForConsole("log", arguments)),
    json: (...arguments) => ws.send(formJSONStringForConsole("json", arguments))
  };
  try {
    require(`../commands/${args[0]}`).call(args.slice(1), stdout);
  } catch (err) {
    stdout.error(`Command not recognised: ${args.join(' ')}`, err);
  }
}

function formJSONStringForConsole(_type="log", obj) {
  return JSON.stringify({
    _type: _type,
    args: obj
  })
}

module.exports = {
  parse: parse
};
