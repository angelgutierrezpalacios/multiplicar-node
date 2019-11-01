//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('============================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('============================='.green);

    let mult = 0;

    for (let i = 1; i <= limite; i++) {

        console.log(`${ base }*${ i }=${ base * i }`)
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            reject;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base }*${ i }=${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }.txt`);

        });
    });

}


module.exports = {
    crearArchivo,
    listarTabla
}