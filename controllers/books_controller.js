const express = require('express')

const router = express.Router()

const db = require('../models')

//Index route
router.get('/', async (req, res, next) => {
    try {
        const books = await db.Product.find({})
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

//Show route
router.get('/:id', async (req, res, next) => {
    res.send('This is the show page')
})

//Edit route
router.get('/:id/edit', async (req, res, next) => {
    res.send('Edit page')
})

//Create route
router.post('/', async (req, res, next) => {
    res.send('This is working')
})

//Delete route
router.delete('/:id', async (req, res, next) => {
    res.send('This is working')
})

//Update route
router.put('/:id', async (req, res, next) => {
    res.send('This is working')
})

//Exporting router
module.exports = router