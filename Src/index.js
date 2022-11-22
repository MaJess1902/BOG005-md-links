// const { error } = require('console');
const fs = require('fs');
const path = require('path');
const process = require('process'); //Tomará todo lo que yo ponga en la terminal para analizarlo con node
const argsTerminal = process.argv; //Objeto process? 


function readPath(route) {
  let myRoute = "";
  if (route) {
    //verificar si la ruta es absoluta
    if (path.isAbsolute(route)) {
      myRoute = route
      console.log("Es absoluta!")
    }
    else {
      myRoute = path.resolve(route)
      path.resolve(route);
      console.log("Cambiamos a Absoluta", myRoute)
    }

  } else {
    console.log("no hay ruta");
  }

  // if(myRoute){// leer que hay en las rutas -- leer process - 

  // }
}
readPath(argsTerminal[2])







// let files = []
// fs.readdir('./rutas',(err, files) => {
//   if(err) {
//     console.error(err)
//     throw Error(err)
//   }
//   console.log(files)
//   let file = fs.readFile('./archivo.md', 'utf-8');
//   console.log(file);
// })


// function mdLinks(path) {
//   fs.readFile(path, 'utf-8' , (error,data) => {
//     if (error) {
//       console.log("Error");
//     } else {
//       console.log(path)
//     }
//   })
// }

// function mdLinks(){
//   fs.readFile('./rutas/archivo.md', (error,md)=>{
//     if(error){
//       console.log(error.message);
//     }
//     console.log(md);
//   })
// }
