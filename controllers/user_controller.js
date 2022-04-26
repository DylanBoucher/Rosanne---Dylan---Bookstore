const express = require('express')

const router = express.Router()

const db = require('../models')

//Show route
router.get('/:id', async (req, res, next) => {
    try{
        const foundBook = await db.Product.findById(req.params.id)
        const context = {
            oneBook: foundBook,
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
    res.send('Edit page')
})

//Create route
router.post('/', async (req, res, next) => {
    try{
        const newUser = await db.User.create(req.body)
        return res.redirect('/newUser')
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Exporting router
module.exports = router