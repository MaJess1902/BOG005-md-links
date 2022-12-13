const fs = require('fs')
const marked = require('marked');
const { readPathF } = require("./path.js");


function getLinks(element) {
    const links = [];

    return new Promise((resolve, reject) => {
        fs.readFile(element, "utf8", (error, data) => {
            if (error) resolve(error);
            marked.marked(data, {
                walkTokens: (token) => {
                    if (token.type === 'link' && token.href.includes('http')) {
                        links.push({
                            href: token.href,
                            text: token.text,
                            file: element
                        })
                    }
                }
            }); resolve(links)
            reject(error);
        })
    })
}

function fixArrayObjects() {
    let arrayPromises = [];
    return new Promise((resolve, reject) => {
        const allLinks = readPathF.map((file) => getLinks(file))
        Promise.all(allLinks).then((res) => {
            resolve(res.flat());
            arrayPromises = (res.flat());
        })
    })
}




const arrayObjects = fixArrayObjects(readPathF);

module.exports = {
    fixArrayObjects
}