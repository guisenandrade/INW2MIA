const leia = require("prompt-sync")()

let aluno1
let aluno2
let nota1
let nota2

aluno1 = leia("Nome do aluno 1 : ")
nota1 = parseInt(leia("Nota do aluno 1 : "))
aluno1 = leia("Nome do aluno 2 : ")
nota1 = parseInt(leia("Nota do aluno 2 : "))

if(nota1>5){
    console.log("Oi "+aluno1+" aprovado")
}
else{
    console.log("Oi "+ aluno1+" recuperação")
}

if(nota2>5){
    console.log("Oi "+aluno2+" aprovado")
}
else{
    console.log("Oi "+ aluno2+" recuperação")
}