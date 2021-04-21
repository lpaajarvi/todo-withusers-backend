const express = require('express')
const router = express.Router()
const signInTemplate = require('../models/SignInModels')

const taskTemplate = require('../models/taskModels')

// posting a new task (with author_id)
router.route('/create').post((req, res) => {
  const title = req.body.title
  const content = req.body.content
  const author_id = req.body.author_id
  const newTask = new taskTemplate({
    title,
    content,
    author_id,
  })
  // console.log('saving' + title)
  newTask
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Task saved succesfully',
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
})

router.get('/tasks/:author_id', async (req, res, next) => {
  let idToFind = req.params.author_id.toString()
  // console.log(req.params.author_id)

  taskTemplate.find().then((foundTasks) => {
    // filter to show only tasks with author_id given as param since it didn't
    // work putting it as parameter in find
    filteredTasks = foundTasks.filter((task) => task.author_id == idToFind)
    // There's no need to send all info to frontend

    for (var i = 0; i < filteredTasks.length; i++) {
      // console.log('Getting' + filteredTasks[i]['date'])
    }

    res.json(filteredTasks)
  })
})

router.delete('/tasks/:id/', function (req, res) {
  taskTemplate.findByIdAndRemove({ _id: req.params.id }, function (err, docs) {
    if (err) res.json(err)
    else res.status(200).json({ code: 200, message: 'Task deleted' })
  })
})

router.post('/signin', (request, response) => {
  // grabbing values from the body of the POST request that user makes
  const signedInUser = new signInTemplate({
    email: request.body.email,
    password: request.body.password,
  })

  if (signedInUser.email == '' || signedInUser.password == '') {
    response.json({
      status: 'FAILED',
      message: 'Empty credentials supplied',
    })
  } else {
    // check if user exists
    let email = signedInUser.email
    // console.log('email: ' + email)
    let password = signedInUser.password
    // console.log('password. ' + password)

    signInTemplate
      .find({ email })
      .then((data) => {
        if (data) {
          // console.log('data for this user: ' + data)
          // user exists
          // here should be hashing
          if (password == data[0].password) {
            response.json({
              status: 'SUCCESS',
              message: 'Sign in successful',
              id: data[0]._id,
              email: data[0].email,
            })
          } else {
            response.json({
              status: 'FAILED',
              message: 'Invalid password entered!',
            })
          }
        }
      })
      .catch((err) => {
        response.json({
          status: 'FAILED',
          message: 'An error occured while checking for existing user: ' + err,
        })
      })
  }
})

module.exports = router
