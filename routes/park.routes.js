const express = require('express')
const router = express.Router()

// Aquí los endpoints

const Park = require("../models/park.model")



//ruta 1

router.get('/new', (req, res) => res.render('parks/new-park'));


//ruta 2

router.post('/new', (req, res) => {

    const { name, description } = req.body;

    Park
        
        .create({ name, description })
        .then(() => res.redirect('/'))
        .catch(err => console.log('Error:', err))
    
})

module.exports = router