//Imports
const express = require('express')
const methodOverride = require('method-override')
const controllers = require('./controllers')

//Create instance
const app = express()

//db connection
require('./config/db.connection')

const PORT = process.env.PORT

//App configs
app.set('view engine', 'ejs')

//Middleware
app.use(express.static('public'))

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

//Controllers
app.use('/products', controllers.products)

//Home route
app.get('/', (req, res) => res.send('Home page'))

//Listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))