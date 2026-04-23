// it is the Learning-phase project, not the actuall project....

const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const app = express()
const Port = 8000


// This is Middleware. later we will learn about it. for now it will convert the incoming data to json format and we can access it in req.body.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes

// if it is /api then the server know that it is and api call so it will return json data
app.get('/api/users', (req, res) => {
     return res.json(users)
})

// here we have to render a HTML page...
app.get('/users', (req, res) => {
     const html = `
     <ul>
          ${users.map(user => `<li> ${user.first_name} </li>`).join("")}
     </ul>
     `
     res.send(html)
})

// this is SSR , in case a react, flutter app will be there it should always use the api, because we dont want to put load on the Server, and remove the dependency of the server on the client.


//dynamic path.
app.get('/api/users/:id', (req, res) => {
     const id = Number(req.params.id);
     const user = users.find(user => user.id === id);
     return res.json(user);
})


// here we cant actully perform the post and patch request because we are using the json file as our database.
// so we will just return a message that the user is created or updated.

app.post('/api/users', (req, res) => {
     const body = req.body;
     console.log("Received body:", body);
     users.push({ id: users.length + 1, ...body }); // this is just for testing, in real world we will use a database and it will handle the id generation.
     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
          return res.json({ "message": "User Created", "data": body, "id": users.length })
     });
});

app.patch('/api/users/:id', (req, res) => {
     const id = Number(req.params.id);
     const body = req.body;
     console.log("Received body:", body);
     const userIndex = users.findIndex(user => user.id === id);
     if (userIndex === -1) {
          return res.status(404).json({ "message": "User Not Found" })
     }
     users[userIndex] = { ...users[userIndex], ...body };
     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
          return res.json({ "message": "User Updated" })
     });
})
app.delete('/api/users/:id', (req, res) => {
     // NOTE - Delete a user
     const id = Number(req.params.id);
     const userIndex = users.findIndex(user => user.id === id);
     if (userIndex === -1) {
          return res.status(404).json({ "message": "User Not Found" })
     }
     users.splice(userIndex, 1);
     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
          return res.json({ "message": "User Deleted" })
     });
     return res.json({ "message": "User Deleted" })
})


// here we have 3 same routes but with different path, so the server will know which one to call based on the path and the method.
// app.route('/api/users/:id').get((req, res) => {
//      const id = Number(req.params.id);
//      const user = users.find(user => user.id === id);
//      return res.json(user);
// }).patch((req, res) => {
//      // NOTE - Update a user
//      return res.json({ "message": "User Updated" })
// }).delete((req, res) => {
//      // NOTE - Delete a user
//      return res.json({ "message": "User Deleted" })
// })

app.listen(Port, () => {
     console.log(`Server Started at PORT ${Port}`)
})



// here i used postman to test the api, you can also use curl or any other tool to test the api. you can also use the browser to test the get requests.