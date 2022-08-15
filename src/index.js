const config = require('./fileserver/configs/config');
const express = require('express');
const bodyParser = require('body-parser');
const { storageCleanup } = require('./storageprovider/controllers/localfilesystem');

// this handles versioning
const filesRouter = require('./fileserver/routes/files');

const app = express();
const PORT = config.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});

app.use(bodyParser.json());
app.use('/api/files', filesRouter);

setInterval(storageCleanup, config.CLEANUP_JOB_INTERVAL * 1000 * 60);