const axios = require("axios");
const arrayObjects = [
    {
        href: 'https://www.youtube.com/watch?v=5M1YP5IFL_o&amp;ab_channel=Dayurix%E6%B0%B4%E3%83%9F',
        text: 'https://www.youtube.com/watch?v=5M1YP5IFL_o&amp;ab_channel=Dayurix%E6%B0%B4%E3%83%9F',
        file: 'C:\\Users\\mjsc1\\OneDrive\\Escritorio\\BOG005-md-links\\BOG005-md-links\\rutas\\prueba2\\archivomd2.md'
    },
    {
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&amp;ab_channel=RickAstley',
        text: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&amp;ab_channel=RickAstley',
        file: 'C:\\Users\\mjsc1\\OneDrive\\Escritorio\\BOG005-md-links\\BOG005-md-links\\rutas\\archivo.md'
    }
]

function validateLinks(arrayObjects) { //esta 
    let arrPromises = [];
    arrPromises = arrayObjects.map((object) => {
        return axios
            .get(object.href)
            .then((res) => {
                object.status = res.status;
                object.messaje = "ok";
                return object
            })
            .catch((err) => {
                object.status = 404;
                object.messaje = "fail"
            })
    })
    return Promise.all(arrPromises).then(res => res);
}

validateLinks(arrayObjects);

module.exports = {
    validateLinks
}