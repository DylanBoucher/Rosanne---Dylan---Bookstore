const express = require('express')

const router = express.Router()

const db = require('../models')

//Index route
router.get('/', async (req, res, next) => {
    try {
        const everyReview = await db.Review.find({})
        res.send(everyReview)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//New route
router.get('/new', async (req, res, next) => {
    try {
        const allBooks = await db.Product.find({})
        const context = {books: allBooks}
        res.render('reviews/new.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Post route
router.get('/', async (req, res, next) => {
    try {

    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Show route
router.get('/', async (req, res, next) => {
    try {

    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Update route
router.get('/', async (req, res, next) => {
    try {

    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Edit route
router.get('/', async (req, res, next) => {
   res.send("hitting review edit")
})

//Delete route
router.get('/', async (req, res, next) => {
    try {

    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

module.exports = router