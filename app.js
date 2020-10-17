const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')

require('./config/mongoose.js')
const User = require('./models/user.js')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: 'fjdksorunhtuiresfvklfsdfew',
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const input = req.body
  User.find(input)
    .lean()
    .then(user => {
      if (user.length === 0) {
        res.render('index', { wrong: true })
      } else {
        req.session.userID = user[0]._id
        res.redirect('/welcome')
      }
    })
    .catch(error => console.error(error))
})

app.get('/welcome', (req, res) => {
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

app.listen(port, () => {
  console.log(`The Express server is listening on https://localhost:${port}`)
})