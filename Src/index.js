const { fixArrayObjects } = require("./links");
const { validateLinks } = require("./validateLinks");
const { readPath } = require("./path");
const routeUser = process.argv[2];

const mdLinks = (path, options = { validate: true }) => {
    return new Promise((resolve, reject) => {
        const validatePath = readPath(path);
        if (options.validate) {
            fixArrayObjects(validatePath)
                .then(response => {
                    validateLinks(response)
                    resolve(response);
                })
        }
        else {
            fixArrayObjects(validatePath)
                .then(response => resolve(response))
        }
    })
}

module.exports = {
    mdLinks,
}