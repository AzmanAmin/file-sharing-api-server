const config = require('./configs/config');
const express = require('express');
const bodyParser = require('body-parser');

// this handles versioning
const filesRouter = require('./routes/files');

const app = express();
const PORT = config.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});

app.use(bodyParser.json());
app.use('/api/files', filesRouter);