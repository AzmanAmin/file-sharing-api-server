const router = require('express').Router();

const {
    uploadNewFile,
    downloadFile,
    deleteFile,
} = require("../controllers/files");

const { uploadFile } = require("../../storageprovider/controllers/localfilesystem");

router.post('/', uploadFile, uploadNewFile);

router.get('/:publicKey', downloadFile);

router.delete('/:privateKey', deleteFile);

module.exports = router;