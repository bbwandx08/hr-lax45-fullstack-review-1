var Student = require('../db/Student.js');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      Student.find() //important<<<
        .then(result => {
          res.status(200).send(result);
        })
        .catch(err => res.status(400).send(err));
    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student
      Student.create(req.body)                                     //<<<<<<<<<<req.body!!!!!!!
        .then(() => res.status(200).send('student posted to database'))
        .catch(err => res.status(400).send(err))
    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      Student.updateOne({_id: req.params.id}, {name: req.body.name})
      .then(() => res.status(200).send('student name updated!'))
      .catch(err => res.status(400).send(err))
    }
  }
};

module.exports = controller