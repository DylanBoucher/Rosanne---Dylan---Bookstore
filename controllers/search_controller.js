const express = require('express')

const router = express.Router()

const db = require('../models')

//Index route
search = () => {
    let input = document.querySelector('#search')
    input = input.toLowerCase()
    let x = document.querySelector('.books')

    for(let i = 0; i < x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            router.get('/', (req, res) => {
                const context = {
                    books: x[i]
                }
                res.render('index.ejs', x[i])
            })
        }else {
            x[i].style.display
        }
    }
}






//Exporting router
module.exports = router