const nanoid = require('nanoid');

const { Url } = require('../models/url');

async function handleGenerateNewShortUrl(req, res) {
     if (!req.body.url) {
          return res.status(400).json({
               message: 'Url is required'
          })
     }
     const shortNanoId = nanoid.nanoid(8);
     await Url.create({
          shortId: shortNanoId,
          redirectUrl: req.body.url,
          visitHistory: []
     })

     return res.status(201).json({
          id: shortNanoId
     })
}

async function handleRedirect(req, res) {
     const shortId = req.params.shortId;
     const result = await Url.findOneAndUpdate({ shortId }, {
          $push: {
               visitHistory: {
                    timestamp: Date.now()
               }
          }
     })

     if (!result) {
          return res.status(404).json({
               message: 'Url not found'
          })
     }

     return res.redirect(result.redirectUrl);
}

async function handleAnalyticsOfShortUrl(req, res) {
     const shortId = req.params.shortId;
     const result = await Url.findOne({ shortId });

     if (!result) {
          return res.status(404).json({
               message: 'Url not found'
          })
     }

     return res.json({
          totalClicks: result.visitHistory.length,
          visitHistory: result.visitHistory
     })
}



module.exports = {
     handleGenerateNewShortUrl,
     handleRedirect,
     handleAnalyticsOfShortUrl
}
