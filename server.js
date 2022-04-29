//Imports
const express = require('express')
const methodOverride = require('method-override')
const controllers = require('./controllers')

//Create instance
const app = express()
const router = express.Router()

//require for home
const db = require('./models')

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
app.use('/user', controllers.users)
app.use('/reviews', controllers.reviews)

//Home route
app.get('/', (req, res) => res.render('home.ejs'))
// router.get('/', async (req, res, next) => {
//     try {
//         const books = await db.Product.find({})
//         const context = { books }
//         return res.render('./home.ejs', context)
//     }catch (error) {
//         console.log(error)
//         req.error = error
//         return next()
//     }
// })

//Listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))