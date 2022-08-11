const files = require('../data/files');

const uploadNewFile = (fileData) => {
    try {
        return files.uploadNewFile(fileData);
    } catch (error) {
        throw error;
    }
};

const downloadFile = (fileData) => {
    try {
        return files.downloadFile(fileData);
    } catch (error) {
        throw error;
    }
};

const deleteFile = (fileData) => {
    try {
        return files.deleteFile(fileData);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    uploadNewFile,
    downloadFile,
    deleteFile,
};