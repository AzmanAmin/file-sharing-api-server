const { v4: uuid } = require('uuid');
const files = require('../data/files');

const uploadNewFile = (fileData) => {
    const newFileData = {
        ...fileData,
        privatekey: uuid(),
        publickey: uuid(),
        createdat: Date.now(),
        updatedat: Date.now()
    }
    try {
        return files.uploadNewFile(newFileData);
    } catch (error) {
        throw error;
    }
};

const downloadFile = (publicKey) => {
    try {
        return files.downloadFile(publicKey);
    } catch (error) {
        throw error;
    }
};

const getFileToDelete = (privateKey) => {
    try {
        return files.getFileToDelete(privateKey);
    } catch (error) {
        throw error;
    }
};

const deleteFile = (privateKey) => {
    try {
        return files.deleteFile(privateKey);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    uploadNewFile,
    downloadFile,
    getFileToDelete,
    deleteFile,
};