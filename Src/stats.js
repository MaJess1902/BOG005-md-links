const axios = require("axios");

const statsOptions = (okLinks) => {
    return {
        Total: okLinks.length,
        unique: new Set(okLinks.map((arrayobjects) => arrayobjects.href)).size,
    };
};

const statsValidate = (okLinks) => {
    let arrPromises = [];
    arrPromises = okLinks.map((object) => {
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
};

module.exports = {
    statsOptions,
    statsValidate,
}