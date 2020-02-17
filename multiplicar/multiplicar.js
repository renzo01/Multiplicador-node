var colors = require("colors");
const fs = require("fs");
let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("La base solo puede ser un nuemero");
      return;
    }
    if (!Number(limite)) {
      reject("El limite tambien debe ser solo un numero");
      return;
    }
    let data = "";
    console.log(`============`.green);
    console.log(`==tabla de ${base}==`.red);
    console.log(`============`.green);
    for (var i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    resolve(`${data}`);
  });
};
let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("No es un numero");
      return;
    }
    if (!Number(limite)) {
      reject("El limite es un numero");
      return;
    }

    let data = "";

    for (var i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      resolve(`tablas-${base}.txt`);
    });
  });
};
module.exports = {
  crearArchivo,
  listarTabla
};
