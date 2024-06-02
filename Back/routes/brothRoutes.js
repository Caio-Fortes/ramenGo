const Broth = require('../models/Broth')

const router = require('express').Router();

router.get('/', async(req, res)=> {
    try{
        const broth = await Broth.find();
        res.status(201).json(broth);
    } catch{
        res.status(201).json({error: 'teste'})
    }
})

module.exports = router;