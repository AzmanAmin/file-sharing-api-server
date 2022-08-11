const config = require('../configs/config');
const multer = require('multer');

const upload = multer({
    dest: config.FOLDER
}).single("avatar");

module.exports = upload;