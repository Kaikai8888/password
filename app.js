const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

require('./config/mongoose.js')
const User = require('./models/user.js')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const input = req.body
  User.find(input)
    .then(user => {
      if (user.length === 0) {
        res.render('index', { wrong: true })
      } else {
        res.render('welcome', { firstName: user[0].firstName })
      }
    })
    .catch(error => console.error(error))
})

app.listen(port, () => {
  console.log(`The Express server is listening on https://localhost:${port}`)
})