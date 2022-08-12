const router = require('express').Router();

const {
    uploadNewFile,
    downloadFile,
    getFileToDelete,
    deleteFile
} = require("../controllers/files");

const {
    uploadFile,
    downloadOneFile,
    deleteFileFromStorage
} = require("../../storageprovider/controllers/localfilesystem");

router.post('/', uploadFile, uploadNewFile);

router.get('/:publicKey', downloadFile, downloadOneFile);

router.delete('/:privateKey', getFileToDelete, deleteFileFromStorage, deleteFile);

module.exports = router;