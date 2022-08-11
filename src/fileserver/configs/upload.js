const config = require('../configs/config');
const multer = require('multer');

const upload = multer({
    dest: config.FOLDER
});

module.exports = upload;