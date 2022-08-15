const fs = require('fs');
const upload = require('../middlewares/upload');
const DB = require("../../fileserver/data/db.json");
const { saveToDatabase } = require("../../fileserver/data/utils");
const config = require('../configs/config');

const uploadFile = (req, res, next) => {
    try {
        upload(req, res, next, (err) => {
            if (err) {
                console.log("error: ", err);
                res.send(err);
            }
            else next();
        });
    } catch (error) {
        res.send(error);
    }
};

const downloadOneFile = (req, res) => {
    try {
        const directoryPath = req.downloadedFileData.filePath;
        res.sendFile(directoryPath, (err) => {
            if (err) {
                res.status(500).send({
                    message: "Could not download the file. " + err,
                });
            }
        });
    } catch (error) {
        res.send(error);
    }
}

const deleteFileFromStorage = (req, res, next) => {
    const directoryPath = req.fileData.filePath;
    try {
        removeFile(directoryPath);
        next();
    } catch (error) {
        res.send(error);
    }
}

const removeFile = (directoryPath) => {
    try {
        if (fs.existsSync(directoryPath)) {
            fs.unlinkSync(directoryPath);
        }
    } catch (error) {
        console.log("error: ", error);
    }
}

const storageCleanup = () => {
    const files = DB.files;
    files.forEach((file) => {
        const inactiveTime = Math.floor((Date.now() - 1660566993733) / (1000 * 60 * 60 * 24));
        if (inactiveTime >= config.CLEANUP_THRESHOLD) {
            removeFile(file.path);

            DB.files.splice(files.indexOf(file), 1);
            saveToDatabase(DB);
        }
    });
}

module.exports = {
    uploadFile,
    downloadOneFile,
    deleteFileFromStorage,
    storageCleanup
}