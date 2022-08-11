const router = require('express').Router();
const upload = require('../configs/upload');

const {
    uploadNewFile,
    downloadFile,
    deleteFile,
} = require("../controllers/files");

router.post('/', upload.single("avatar"), uploadNewFile);

router.get('/:publicKey', downloadFile);

router.delete('/:privateKey', deleteFile);

module.exports = router;