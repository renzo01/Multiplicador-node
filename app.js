const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');


/* let parametro = agrv[2];
let base = parametro.split('=')[1]; */

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(lista => console.log(`${lista}`))
        .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite).then(archivo => console.log(`Archivo creado : ${archivo} con el limite: ${limite}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}


/* let data = '';

for (var i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}



fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); */

/* crearArchivo(base).then(archivo => console.log(`Archivo creado : ${archivo}`))
   .catch(err => console.log(err)); */
