const express = require('express')

const router = express.Router()

const db = require('../models')

//Index route
router.get('/', async (req, res, next) => {
    res.send('This is working')
})

//New route
router.get('/new', (req, res) => {
    res.send('New page')
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