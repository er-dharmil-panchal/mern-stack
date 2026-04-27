const express = require('express');

// Importing the controller function to handle the requests.
const {
     handdleGetUsers,
     handdleGetUserById,
     handdleUpdateUserById,
     handdleDeleteUserById,
     handdleCreateUser
} = require('../controllers/user');



const router = express.Router();

router.route('/')
     .get(handdleGetUsers)
     .post(handdleCreateUser)

router.route('/:id')
     .get(handdleGetUserById)
     .patch(handdleUpdateUserById)
     .delete(handdleDeleteUserById)

module.exports = router;