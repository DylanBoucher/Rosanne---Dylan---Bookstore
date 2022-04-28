const express = require('express')

const router = express.Router()

const db = require('../models')

//New route - user
router.get('/new', (req, res) => {
    res.render('user/newUser.ejs')
})
//Show route - user
router.get('/:username', async (req, res, next) => {
    try{
        const user = await db.User.findById(req.params.id)
        const context = {
            users: user,
        }
        return res.render('user/showUser.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Edit route
router.get('/:username/edit', async (req, res, next) => {
    try{
        const updatedUser = await db.User.findById(req.params.id)
        const context = {user: updatedUser}
        return res.render('user/editUser.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Create route
router.post('/', async (req, res, next) => {
    try{
        const createdUser= await db.User.create(req.body)
        return res.redirect('/')
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Delete route
router.delete('/:username', async (req, res, next) => {
    try{
        const deletedUser = await db.User.findByIdAndDelete(req.params.id)
        return res.redirect('/')
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Update route
router.put('/:username', async (req, res, next) => {
    try{
        const updatedUser = await db.User.findByIdAndUpdate(req.params.id, req.body)
        return res.redirect(`user/showUser`)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Exporting router
module.exports = router