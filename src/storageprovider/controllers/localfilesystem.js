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

const downloadOneFile = (req, res) => {
    const directoryPath = req.downloadedFileData.filePath;
    res.sendFile(directoryPath, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
}

module.exports = {
    uploadFile,
    downloadOneFile
}