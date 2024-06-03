const Order = require('../models/Order');
const Broth = require('../models/Broth');
const Protein = require('../models/Protein');

const router = require('express').Router();

router.get('/', async(req, res)=> {
    try{
        const order = await Order.find();
        res.status(201).json(order);
    } catch{
        res.status(201).json({error: 'teste'})
    }
})

router.post('/', async (req, res) =>{
    const {brothId,  proteinId} = req.body;
    const idsOrder = { brothId,  proteinId };
    
    if(!brothId){
        res.status(400).json({ error:  "both brothId and proteinId are required" })
        return
    }
    if(!proteinId){
        res.status(400).json({ error:  "both brothId and proteinId are required" })
        return 
    }
    
    try {
        const brothSelected = await Broth.findOne({id: idsOrder.brothId })
        const proteinSelected = await Protein.findOne({id: idsOrder.proteinId })

        const newOrder = {
            description: `${brothSelected.name} and ${proteinSelected.name} Ramen`,
            image: setImageOrderByProteinName(proteinSelected.name),
            orderId: gerarNumeroAleatorio(1, 10000)
        }
        await Order.create(newOrder);
        res.status(201).json(newOrder);
    } catch (error){
        res.status(500).json({ error: error })
    }

    function setImageOrderByProteinName(proteinSelected){
        switch(proteinSelected){
            case 'Chasu':
                return "../public/ProteinChasu.png";
                break;
            case 'Yasai Vegetarian':
                return "../public/ProteinYasaiVegetarian.png";
                break;
            case 'Karaague':
                return "../public/ProteinKaraague.png";
                break;
            default: '';
        }
    }

    function gerarNumeroAleatorio(min, max) {
        return  Math.floor(Math.random() * (max - min + 1)) + min;
    }
})


module.exports = router;