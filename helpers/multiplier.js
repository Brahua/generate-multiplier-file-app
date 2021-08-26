const fs = require("fs");
const PATH = "./outputs";

const createMultiplierTableFile = async (
  base = 5,
  print = false,
  limit = 10
) => {
  try {
    const headerFile = `=================
Tabla del ${base}
=================`;

    let salida = `${headerFile}\n`;
    for (let index = 1; index <= limit; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }
    const fileName = `tabla_${base}.txt`;
    // fs.writeFile(`${path}/${fileName}`, salida, (err) => {
    //   if (err) throw err;
    //   console.log(`${fileName} creada`);
    // });

    fs.writeFileSync(`${PATH}/${fileName}`, salida);
    if (print) console.log(salida);
    return `${fileName} creada`;
  } catch (error) {
    throw error;
  }
};

const createMultiplierTableFilePromise = (
  base = 5,
  print = false,
  limit = 10
) => {
  return new Promise((resolve, reject) => {
    const headerFile = `=================
Tabla del ${base}
=================`;

    let salida = `${headerFile}\n`;
    for (let index = 1; index <= limit; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }
    const fileName = `tabla_${base}.txt`;

    fs.writeFileSync(`${PATH}/${fileName}`, salida);
    if (print) console.log(salida);
    resolve(`${fileName} creada`);
  });
};

module.exports = {
  createMultiplierTableFile,
  createMultiplierTableFilePromise,
};
