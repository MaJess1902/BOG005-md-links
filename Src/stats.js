
let perro = [
    {
        href: 'https://pelispedia.one/episodio/la-casa-del-dragon-1x6/',
        text: 'https://pelispedia.one/episodio/la-casa-del-dragon',
        file: 'C:\\Users\\Nattalia Bravo\\Documents\\Javascript\\MDLINKS\\BOG005-md-links\\src\\CarpetadePruebas\\Pruebas\\pruebaMD.md',
        status: 200,
        mensaje: 'ok'
    },
    {
        href: 'https://pelispedia.onepio/la-casa-del-dragon-1x1/}',
        text: 'https://pelispedia.onepio/la-casa-del-dragon-1x1/}',
        file: 'C:\\Users\\Nattalia Bravo\\Documents\\Javascript\\MDLINKS\\BOG005-md-links\\src\\CarpetadePruebas\\Archivo3.md',
        status: 404,
        mensaje: 'Fail'
    },
    {
        href: 'https://www.pixar.com/404',
        text: 'https://www.pixar.com/404',
        file: 'C:\\Users\\Nattalia Bravo\\Documents\\Javascript\\MDLINKS\\BOG005-md-links\\src\\CarpetadePruebas\\Archivo3.md',
        status: 200,
        mensaje: 'ok'
    }
];
const statsOptions = (okLinks) => {
    return {
        Total: okLinks.length,
        unique: new Set(okLinks.map((arrayobjects) => arrayobjects.href)).size,
    };
};

const statsValidate = (okLinks) => {
    let newObject1 = []
    const brokenLinks = okLinks.filter((link) => link.status == 404).length;
    console.log(brokenLinks, 35)
    return {
        Total: okLinks.length,
        unique: new Set(okLinks.map((arrayObjetos) => arrayObjetos.href)).size,
        Broken: brokenLinks,
    };

};

module.exports = {
    statsOptions,
    statsValidate,
}