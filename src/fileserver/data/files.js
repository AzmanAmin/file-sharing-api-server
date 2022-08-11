const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const uploadNewFile = (fileData) => {
    try {
        DB.files.push(fileData);
        saveToDatabase(DB);
        return {
            publicKey: fileData.publickey,
            privateKey: fileData.privatekey
        }
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }
};

const downloadFile = (fileData) => {
    try {
        // fetch the file from storage
        // update the DB
        // return the file stream
        return {
            fileStream: '',
            mimeType: ''
        }
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }
};

const deleteFile = (fileData) => {
    try {
        // delete the file from storage
        // update the DB
        // return the file removal status
        return {
            fileRemoved: true
        }
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }
};

module.exports = {
    uploadNewFile,
    downloadFile,
    deleteFile,
};