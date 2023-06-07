// DESAFIO 1

let valor1 = 10
let valor2 = 10.25
let nome 
const leia = require("prompt-sync")()

nome = "Pedro Déo"
letra = 'C'
let ativo = true


console.log(valor1)
console.log(letra)

num1 = parseFloat(leia("Digite um numero: "))
num2 = parseFloat(leia("Digite outro numero: "))

console.log("A soma dos dois é igual a "+(num1/num2))

// DESAFIO 2

num3 =parseInt(leia("Digite um numero inteiro : "))

console.log("A raiz quadrada do numero é : "+ (Math.sqrt(num3)))


// DESAFIO 3

num4 = parseInt(leia("Digite um numero inteiro : "))

console.log("Esse numero elevado ao cubo é : "+ (Math.pow(num4,3)))


// DESAFIO 4

A = parseInt(leia("Digite o primeiro numero : "))
B = parseInt(leia("Digite o segundo numero : "))
C = parseInt(leia("Digite o terceiro numero : "))

R = Math.pow((A+B),2)

S = Math.pow((B+C),2)

D = (R + S)/2

console.log("O resultado final vai ser igual a : " + D)


// DESAFIO 5

x1 = parseInt(leia("Digite o primero ponto x : "))
x2 = parseInt(leia("Digite o segundo ponto x : "))
y1 = parseInt(leia("Digite o primero ponto y : "))
y2 = parseInt(leia("Digite o segundo ponto x : "))

d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))

console.log("O resultado é "+ Math.round(d))


// DESAFIO 7

 aluno = (leia("Digite o nome do aluno : "))
 sexo = (leia("Digite se você se indentifica como homem ou mulher ou não-binário : "))
 nota  = parseInt(leia("Digite a nota do aluno  [1-10] : "))


if(sexo == "homem" ){
    if(nota <= 5){
        console.log("Oi aluno "+aluno+" ainda não, recuperação.")
        }
        else{
            console.log("Oi aluno "+aluno+" ótimo, continue assim.")
        }
}

else if (sexo == "mulher"){
    if(nota <= 5){
        console.log("Oi aluna "+aluno+" ainda não, recuperação.")
        }
        else{
            console.log("Oi aluna "+aluno+" ótimo, continue assim.")
        }
}

if(sexo == "nao-binario" ){
    if(nota <= 5){
        console.log("Oi alune "+aluno+" ainda não, recuperação.")
        }
        else{
            console.log("Oi alune "+aluno+" ótimo, continue assim.")
        }
}
