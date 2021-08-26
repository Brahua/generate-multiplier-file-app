const { argv } = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("p", {
    alias: "print",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Este es el número hasta donde quieres la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  });

module.exports = { argv };
