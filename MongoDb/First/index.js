const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Port = 8000

// Mongoose is a package, which helps us to connect mongoDb with our nodeJs application.
// It provides a straight forward, schema based solution to model our application data.
// It also provides a lot of built in methods to perform various operations on the database.

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Connect to MongoDB (using mongoose)
// to connect database first find the url of your database, 
// it is present if you write mongosh for mac in terminal.
mongoose
     .connect('mongodb://127.0.0.1:27017/First-Database')
     .then(() => {
          console.log("Connected to MongoDB");
     }).catch((err) => {
          console.log("Error connecting to MongoDB", err);
     })

// schema
const userSchema = new mongoose.Schema({
     first_name: {
          type : String,
          required: true
     },
     last_name: {
          type : String,
     },
     email: {
          type : String,
          required: true,
          unique: true
     },
     job_title: {
          type : String,
     },
     gender: {
          type : String,
     }
}, { timestamps: true })

// now schema is done, we have to make Model now to perform CRUD operations on the database.
const User = mongoose.model('user', userSchema);


// IF i run till this point, it will connect to the database and create a collection named "users" in the 
// "First-Database" database, but it will not have any data in it, because we have not added any data to it yet.

// -> Do use First-Database in mongosh, to select the database to perform operations.
// Output :- test> 
//   use First-Database
//   switched to db First-Database
//   First-Database> show collections
//   users


app.get('/api/users', async (req, res) => {
     const users = await User.find({});
     return res.json(users);
 });


// showing data in html format , fetching from Database
app.get('/users', async (req, res) => {
     const allUsers = await User.find({});
     const html = `
     <ul>
          ${allUsers.map(user => `<li> ${user.first_name} - ${user.email} </li>`).join("")}
     </ul>
     `
     res.send(html)
})

app.get('/api/users/:id', async(req, res) => {
     const user = await User.findById(req.params.id)
     return res.json(user);
})

// Create User
app.post('/api/users', async (req, res) => {
     const body = req.body;
     if (!body.first_name || !body.email || !body.gender || !body.job_title || !body.last_name) {
          return res.status(400).json({ "message": "All fields are required" })
     }

     const result = await User.create({
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          job_title: body.job_title,
          gender: body.gender
     });
     console.log("User created successfully", result);
     return res.status(201).json({ "message": "User created successfully" })
      
});
// Do db.users.find({}) in mongosh (terminal where we activated the database).
// -> Output :-
//[
//   {
//     _id: ObjectId('69ea399f0e8315a7eb675a37'),
//     first_name: 'Dp123',
//     last_name: 'P',
//     email: 'dharmil232@gmail.com',
//     job_title: 'hello',
//     gender: 'male',
//     createdAt: ISODate('2026-04-23T15:24:15.929Z'),
//     updatedAt: ISODate('2026-04-23T15:24:15.929Z'),
//     __v: 0
//   }
// ]

// // Update User
// app.patch('/api/users/:id', (req, res) => {
//      const id = Number(req.params.id);
//      const body = req.body;
//      console.log("Received body:", body);
//      const userIndex = users.findIndex(user => user.id === id);
//      if (userIndex === -1) {
//           return res.status(404).json({ "message": "User Not Found" })
//      }
//      users[userIndex] = { ...users[userIndex], ...body };
//      fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
//           return res.json({ "message": "User Updated" })
//      });
// })

// // Delete User 
// app.delete('/api/users/:id', (req, res) => {
//      // NOTE - Delete a user
//      const id = Number(req.params.id);
//      const userIndex = users.findIndex(user => user.id === id);
//      if (userIndex === -1) {
//           return res.status(404).json({ "message": "User Not Found" })
//      }
//      users.splice(userIndex, 1);
//      fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
//           return res.json({ "message": "User Deleted" })
//      });
//      return res.json({ "message": "User Deleted" })
// })

app.listen(Port, () => {
     console.log(`Server is running on port ${Port}`);
})