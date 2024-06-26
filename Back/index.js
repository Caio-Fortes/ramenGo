const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const brothRoutes = require('./routes/brothRoutes');
app.use('/broths', brothRoutes);

const proteinsRoutes = require('./routes/proteinRoutes');
app.use('/proteins', proteinsRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);

const conectionString = `mongodb+srv://caiofortes:APIHostNode@apicluster.hbe6ocj.mongodb.net/ramenGo?retryWrites=true&w=majority&appName=APICluster`

mongoose.connect(conectionString)
.then(() =>{
    app.listen(3000);
    console.log('Banco Conectado')
}).catch((err) =>{
    console.log(err)
});
