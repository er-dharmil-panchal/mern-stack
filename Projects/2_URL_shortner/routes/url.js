const express = require('express');
const router = express.Router();

const {
     handleGenerateNewShortUrl,
     handleRedirect,
     handleAnalyticsOfShortUrl
} = require('../controllers/url');


router.post('/', handleGenerateNewShortUrl);
router.get('/:shortId', handleRedirect);
router.get('/analytics/:shortId', handleAnalyticsOfShortUrl);


module.exports = router;