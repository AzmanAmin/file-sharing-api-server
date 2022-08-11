const upload = require('../configs/upload');

const uploadFile = (req, res, next) => {

    upload(req, res, next, (err) => {
        if (err) {
            console.log("error: ", err);
            res.send(err);
        }
        else next();
    });
};

module.exports = {
    uploadFile
}