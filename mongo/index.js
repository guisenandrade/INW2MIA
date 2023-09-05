//mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/exemplo',
{useNewUrlParser : true, 
useUnifiedTopology:true,
serverSelectionTimeoutMS : 5000});

const db = mongoose.connection

db.on('error', console.error.bind(console,'connection error : '))

db.once("open" , function(){
    console.log('Estamos conectados ao banco')
})