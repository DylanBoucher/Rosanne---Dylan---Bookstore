const express = require('express')

const router = express.Router()

const db = require('../models')

//Show route
router.get('/userName', async (req, res, next) => {
    try{
        const user = await db.User.findById(req.params.id)
        const context = {
            users: user,
        }
        return res.render('showUser.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Exporting router
module.exports = router