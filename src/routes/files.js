const router = require('express').Router();
const {
    uploadNewFile,
    downloadFile,
    deleteFile,
} = require("../controllers/files");


router.post('/', uploadNewFile);

router.get('/:publicKey', downloadFile);

router.delete('/:privateKey', deleteFile);


module.exports = router;