const router = require('express').Router();
const controller = require('./controller.js');

// Todo: Fill out the following routes:

// routes for retrieving all students and adding a new student
router
  .route('/students')
    .get(controller.students.getStudents) //when the method is .get
    .post(controller.students.postStudent)

// route for updating a student's name
router
  .route('/students/:id') //<<<<<< :id is a param inside req that get passed into controller line 21
    .patch(controller.students.updateName)

  module.exports = router; // important<<

