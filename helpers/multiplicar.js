
const fs = require('fs');
const colors = require('colors');
const argv = require('../config/yargs');

const crearArchivo = async( base = 5, listar = false, h ) =>{

  return new Promise( ( resolve, reject ) => {
    
    
    
    let salida = '';
    let consola = '';
    
    for (let i = 1; i <= h; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;  
      consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i }\n`;  
    };

    if ( listar ) {
      console.log('==============='.green);
      console.log('Tabla del:'.green, colors.blue( base ));
      console.log('==============='.green);
      console.log(consola);
    }
    
  
    fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida );
  
    resolve(`Tabla-${ base }.txt`);
  });


}

module.exports = {
  crearArchivo
}