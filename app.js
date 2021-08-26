const { createMultiplierTableFile } = require("./helpers/multiplier");
const { argv } = require("./config/yargs");

console.clear();

createMultiplierTableFile(argv.base, argv.print, argv.limit)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
