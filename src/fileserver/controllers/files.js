const fileService = require("../services/files");

const uploadNewFile = (req, res) => {
    const { originalname, mimetype, destination, filename, path } = req.file;

    const fileData = { originalname, mimetype, destination, filename, path };
    try {
        const uploadedFileData = fileService.uploadNewFile(fileData);
        res.status(201).send({
            status: "OK",
            data: uploadedFileData
        });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
};

const downloadFile = (req, res, next) => {
    const { publicKey } = req.params;
    try {
        const downloadedFileData = fileService.downloadFile(publicKey);
        req.downloadedFileData = downloadedFileData;
        next();
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
};

const deleteFile = (req, res) => {
    // extract file data from request/params body
    // validate the parameters
    // create appropriate object
    // call service function
    const { } = req.params;
    const fileData = {};
    try {
        fileService.deleteFile(fileData);
        res.status(204).send({
            status: "OK"
        });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
};

module.exports = {
    uploadNewFile,
    downloadFile,
    deleteFile,
};