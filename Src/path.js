const fs = require('fs');
const path = require('path');
const process = require('process'); //Tomará todo lo que yo ponga en la terminal para analizarlo con node
const argsTerminal = process.argv; //Objeto process? 


function readPath(route) {
    let myRoute = "";
    let onlyMds = [];
    if (route) {
        //verificar si la ruta es absoluta

        if (route == undefined || route === "") {
        } else if (!path.isAbsolute(route)) {
            myRoute = path.resolve(route);
        } else {
            myRoute = route;
        };
    }

    if (myRoute) {
        if (path.extname(myRoute) == "") {
            let readDirect = fs.readdirSync(myRoute);
            readDirect.forEach((file) => {
                file = path.join(myRoute, file)

                // Si en los elementos al interior de la carpeta se encuentra un archivo MD
                if (path.extname(file) == ".md" && fs.statSync(file).isFile()) {
                    onlyMds.push(file);
                }
                // Si en los elementos al interior de la carpeta se encuentra una subcarpeta
                else if (fs.statSync(file).isDirectory()) {
                    onlyMds = readPath(file).concat(onlyMds);
                }
                // Si los elementos no son ni archivos MD ni carpetas
                else if (path.extname(myRoute) != ".md" || path.extname(myRoute) != "") {
                }
            })
        }
    } return onlyMds
}


const readPathF = readPath(argsTerminal[2])
module.exports = {
    readPath,
    readPathF,
};