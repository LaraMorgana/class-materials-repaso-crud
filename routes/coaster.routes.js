const express = require('express')
const router = express.Router()

// Aquí los endpoints

const Coaster = require("../models/coaster.model");
const Park = require('../models/park.model');

//ruta 3

router.get('/new', (req, res) => {

    Park.find()
        .select({ name: 1, _id: 1 })
        .then(allParks => {
            res.render('coasters/new-coaster', { allParks });
        });
        
});


//ruta 4

router.post('/new', (req, res) => {

    const { name, description, inversions, length, park } = req.body;

    Coaster
        
        .create({ name, description, inversions, length, park })
        .then(() => res.redirect('/'))
        .catch(err => console.log('Error:', err))
    
});

//ruta 5




module.exports = router