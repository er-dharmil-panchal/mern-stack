const express = require('express');
const path = require('path');

const { Url } = require('./models/url');
const { connectToDb } = require('./connection');
const urlRoute = require('./routes/url');

const app = express();
const Port = 3000;

connectToDb('mongodb://localhost:27017/url-shortener')
     .then(() => {
          console.log('Connected to DB');
     })
     .catch((err) => {
          console.log('Error connecting to DB', err);
     });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use('/url', urlRoute);


app.listen(Port, () => {
     console.log(`http://localhost:${Port}`);
});