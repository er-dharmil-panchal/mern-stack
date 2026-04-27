const User = require('../models/user'); 

async function handdleGetUsers(req, res) {
     const users = await User.find({});
     return res.json(users);
}

async function handdleGetUserById(req, res) {
     const user = await User.findById(req.params.id);
     if (!user) return res.status(404).json({ "message": "User Not Found" });
     return res.json(user);
}

async function handdleUpdateUserById(req, res) {
     await User.findByIdAndUpdate(req.params.id, { last_name: "Panchal" });
     return res.json({ "message": "User Updated" })
}

async function handdleDeleteUserById(req, res) {
     await User.findByIdAndDelete(req.params.id);
     return res.json({ "message": "User Deleted" })
}

async function handdleCreateUser(req, res) {
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
     return res.status(201).json({ "message": "User created successfully", id : result._id })
}

module.exports = {
     handdleGetUsers,
     handdleGetUserById,
     handdleUpdateUserById,
     handdleDeleteUserById,
     handdleCreateUser
}