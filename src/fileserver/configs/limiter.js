const config = require('./config');
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: config.WINDOW_SIZE * 60 * 1000,
    max: config.MAX_API_CALL,
    message: "Too many requests!! Please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = apiLimiter;