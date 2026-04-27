const fs = require('fs');

function logRequest(filename) {
     return (req, res, next) => {
          const log = `${new Date().toISOString()} - ${req.method} - ${req.url}\n`;
          fs.appendFile(filename, log, (err, data) => {
               next();
          })
     }
}

module.exports = {
     logRequest
};