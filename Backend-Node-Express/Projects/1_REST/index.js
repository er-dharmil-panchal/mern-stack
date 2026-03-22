// it is the Learning-phase project, not the actuall project....

const express = require('express');
const users = require('./MOCK_DATA.json')

const app = express()
const Port = 8000

// Routes

// if it is /api then the server know that it is and api call so it will return json data
app.get('/api/users',(req,res) => {
     return res.json(users)
})

// here we have to render a HTML page...
app.get('/users',(req,res) => { 
     const html = `
     <ul>
          ${users.map(user => `<li> ${user.first_name} </li>`).join("")}
     </ul>
     `
     res.send(html)
})

// this is SSR , in case a react, flutter app will be there it should always use the api, because we dont want to put load on the Server, and remove the dependency of the server on the client.


//dynamic path.
app.get('/api/users/:id', (req,res) =>{
     const id = Number(req.params.id);
     const user = users.find(user => user.id === id);
     return res.json(user);
})


// here we cant actully perform the post and patch request because we are using the json file as our database.
// so we will just return a message that the user is created or updated.

app.post('/api/users',(req,res) =>{
     // NOTE - Create a new user
     return res.json({"message": "User Created"})
})

app.patch('/api/users/:id',(req,res) =>{
     // NOTE - Update a user
     return res.json({"message": "User Updated"})
})
app.delete('/api/users/:id',(req,res) =>{
     // NOTE - Delete a user
     return res.json({"message": "User Deleted"})
})


// here we have 3 same routes but with different path, so the server will know which one to call based on the path and the method.
app.route('/api/users/:id').get((req,res) => {
     const id = Number(req.params.id);
     const user = users.find(user => user.id === id);
     return res.json(user);
}).patch((req,res) => {
     // NOTE - Update a user
     return res.json({"message": "User Updated"})
}).delete((req,res) => {
     // NOTE - Delete a user
     return res.json({"message": "User Deleted"})
}) 

app.listen(Port, ()=>{

     console.log(`Server Started at PORT ${Port}`)
})