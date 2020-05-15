function call(args) {
  console.log('Input devices:');
  var i=0;
  require('../index').getEM().getInputs().forEach(inp => {
    console.log(`  [${i++}] ${inp}`);
  });
}

module.exports = {
  call: call
};
