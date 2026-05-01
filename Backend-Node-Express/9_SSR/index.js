const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const staticRouter = require('./routes/staticRouter');
app.use(express.urlencoded({ extended: false }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
app.get('/', (req, res) => {
     return res.render('index', {usr : users});
});

// Dynamic route to handle form submission
app.post('/', (req, res) => {
    const newUser = {
        name: req.body.name,
        age: req.body.age
    };
    res.render('index', {usr : [newUser], isNew : true});
});

app.use('/static', staticRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});