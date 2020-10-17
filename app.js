const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')

require('./config/mongoose.js')
const router = require('./routes')

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
app.use(router)

app.listen(port, () => {
  console.log(`The Express server is listening on https://localhost:${port}`)
})