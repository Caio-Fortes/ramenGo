const Protein = require('../models/Protein')

const router = require('express').Router();

router.get('/', async(req, res)=> {
    try{
        const protein = await Protein.find();
        res.status(201).json(protein);
    } catch{
        res.status(201).json({error: 'teste'})
    }
})

module.exports = router;