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
router.post('/', async (req, res, next) => {
    try {
        const newReviewData = req.body
        const newReview = await db.Review.create(newReviewData)
        res.redirect(`/products/${newReview.book}`)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Show route
router.get('/:reviewId', async (req, res, next) => {
    try {
        const foundReview = await db.Review.findById(req.params.reviewId).populate('product');
        const context = {review: foundReview}
        res.render('reviews/show.ejs', context);
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Update route
router.put('/:reviewId', async (req, res, next) => {
    try {
        const updatedReview = await db.Review.findByIdAndUpdate(req.params.reviewId, req.body)
        return res.redirect(`/products/`+updatedReview.book)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

//Edit route
router.get('/:reviewId/edit', async (req, res, next) => {
    try {
        const updatedReview = await db.Review.findById(req.params.reviewId);
        const context = {
            review: updatedReview,
        };
        res.render('reviews/edit.ejs', context);
    }catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//Delete route
router.delete('/:reviewId', async (req, res, next) => {
    try{
        const deleteReview = await db.Review.findByIdAndDelete(req.params.reviewId);
        res.redirect('/products/'+deleteReview.book);
     }catch(error){
         console.log(error);
         req.error = error;
         return next();
     }
});

module.exports = router