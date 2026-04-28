const mongoose = require('mongoose');

async function connectToDb(url) {
    await mongoose.connect(url);
}


module.exports = {
    connectToDb
}