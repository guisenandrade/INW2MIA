//mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/exemplo',
{useNewUrlParser : true, 
useUnifiedTopology:true,
serverSelectionTimeoutMS : 30000});

const db = mongoose.connection

db.on('error', console.error.bind(console,'connection error : '))

db.once("open" , function(){
    console.log('Estamos conectados ao banco')
})

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade : Number,
    profissao : String
});
const pessoa = mongoose.model('pessoa',pessoaSchema)
const marcos = new pessoa({
    nome : "marcos",
    idade : 25,
    profissao: "estudante"
})

console.log(marcos.nome)
console.log(marcos.idade)
console.log(marcos.profissao)

marcos.save();
