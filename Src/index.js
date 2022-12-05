const { fixArrayObjects } = require("./links");
const { validateLinks } = require("./validateLinks");
const { readPath } = require("./path");

const routeUser = process.argv[2];

let mdLinks = (path, options = { validate: true }) => {
    return new Promise((resolve, reject) => {
        const validatePath = readPath(path);
        if (options.validate === true) {
            fixArrayObjects(validatePath)
                .then(response => validateLinks(response))
                .then(response => resolve(response))
        }
        else {
            fixArrayObjects(validatePath)
                .then(response => resolve(response))
        }
    })
}
mdLinks(routeUser).then(rest => (rest))

