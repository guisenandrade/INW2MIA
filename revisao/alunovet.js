const leia = require("prompt-sync")()

let alunos = ["João" , "Paulo" , "Maria"]
let notas = [0,0,0]
let situacao
let matriculas = ["MAT01","MAT02","MAT03"]


for(let i=0; i<3; i++){
    notas[i] = parseInt(leia("Digite a nota do aluno : "))
}

console.log("MAT\tAluno\tNota")
for(let i=0; i<alunos.length; i++){
   if(notas[i]>=5){
    situacao="Aprovado"
   }
   else{
    situacao = "Recuperação"
   }
   console.log(matriculas[i]+"\t"+alunos[i]+"\t"+notas[i]+"\t"+situacao)
}
console.log("Mudando a nota do aluno")
let auxMat = leia("Digite a matricula do aluno : ").toUpperCase()
for(let i=0; i<alunos.length; i++){
   if(auxMat == matriculas[i]){
  console.log("Aluno escolhido : "+alunos[i])
  notas[i] = parseInt(leia("Digite a nova nota do aluno : "))
   }
}
console.log("MAT\tAluno\tNota")
for(let i=0; i<alunos.length; i++){
   if(notas[i]>=5){
    situacao="Aprovado"
   }
   else{
    situacao = "Recuperação"
   }
   console.log(matriculas[i]+"\t"+alunos[i]+"\t"+notas[i]+"\t"+situacao)
}

