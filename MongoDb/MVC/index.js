const express = require('express');

// imports
const {logRequest} = require('./middlewares');
const {connectToMongoDB} = require('./connection');
const userRoute = require('./routes/user');

const app = express();
const Port = 8000

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))



// sending a request to connect to the MongoDB database.
connectToMongoDB('mongodb://127.0.0.1:27017/First-Database').then(() => {
     console.log("Connected to MongoDB");
}).catch((err) => {
     console.error("Error connecting to MongoDB", err);
});

// Registering the user route to handle all requests related to users.
app.use(logRequest('request.log'));
app.use('/api/users', userRoute);

// Middleware to log the incoming requests to the server.


app.listen(Port, () => {
     console.log(`http://localhost:${Port}`);
})