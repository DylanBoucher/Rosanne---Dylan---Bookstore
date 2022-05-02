const express = require('express')

const router = express.Router()

const db = require('../models')

//Index route
router.get('/', async (req, res, next) => {
    try {
        const title = req.query.title
        let books = await db.Product.find({})
        if(title) {
            books = await db.Product.find({title: title})  
        }
        const context = { books }
        return res.render('index.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//New route
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//Search route
router.post('/search', async (req, res, next) => {
    try{
        const title= req.body.search
        const input =title.charAt(0).toUpperCase() + title.slice(1)
        return res.redirect('/products/?title='+ input)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// router.get('/api', async (req, res, next) => {
//     const books = await db.Product.find({})
//     res.send(books)
// })

//Show route
router.get('/:id', async (req, res, next) => {
    try{
        const foundBook = await db.Product.findById(req.params.id)
        const review = await db.Review.find({book: req.params.id})
        const context = {
            oneBook: foundBook,
            review: review,
        }
        return res.render('show.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Edit route
router.get('/:id/edit', async (req, res, next) => {
    try{
        const updatedBook = await db.Product.findById(req.params.id)
        const context = {book: updatedBook}
        return res.render('edit.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Create route
router.post('/', async (req, res, next) => {
    try{
        const createBookSeller = await db.User.find({username: req.body.seller})
        req.body.seller = createBookSeller[0]._id
        const createdBook = await db.Product.create(req.body)
        return res.redirect('/products')
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Delete route
router.delete('/:id', async (req, res, next) => {
    try{
        const deletedBook = await db.Product.findByIdAndDelete(req.params.id)
        const deletedReviews = await db.Review.deleteMany({product: req.params.id})
        return res.redirect('/products')
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Update route
router.put('/:id', async (req, res, next) => {
    try{
        const updatedBook = await db.Product.findByIdAndUpdate(req.params.id, req.body)
        return res.redirect(`/products`)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Exporting router
module.exports = router