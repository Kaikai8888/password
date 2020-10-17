const express = require('express')
const router = express.Router()
const User = require('../../models/user.js')

router.get('/', (req, res) => {
  if (req.session.userID) {
    res.redirect('/welcome')
  } else {
    res.redirect('/login')
  }
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  const input = req.body
  User.find(input)
    .lean()
    .then(user => {
      if (user.length === 0) {
        res.render('login', { wrong: true })
      } else {
        req.session.userID = user[0]._id
        res.redirect('/welcome')
      }
    })
    .catch(error => console.error(error))
})

router.get('/welcome', (req, res) => {
  User.findById(req.session.userID)
    .lean()
    .then(user => {
      if (user) {
        res.render('welcome', { firstName: user.firstName })
      } else {
        res.redirect('/')
      }
    })
    .catch(error => console.error(error))
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router