
// CODIGO 1
console.log("NOME\tNOTA")
console.log("Eduardo\t10")
console.log("Maria\t5,5")


// CODIGO 2

let nome = "Ednilson"

let valor1 = 10
let valor2 = 20

console.log(valor1 + valor2)
console.log(nome)
console.log("Oi "+ nome+" o valor 1 é "+valor1+" e o valor 2 é "+valor2)
console.log("A soma dos dois valores é "+(valor1+valor2))

// CODIGO 3

const leia = require("prompt-sync")()
let valor3 = 0
let valor4 = 0
let nome2 = leia("Digite seu nome : ")
valor3 =parseInt(leia("Digite o valor 1 : ")) 
valor4 =parseInt( leia("Digite o valor 2 : ")) 
console.log("Oi "+nome2.toUpperCase()+" a soma é igual "+(valor3+valor4))
console.log(nome2.length)


//DESAFIO
let nome3 = leia("Digite seu nome : ")
let temp =parseInt(leia("Digite uma temperatura em °C : ")) 

console.log("Olá "+nome3+" a temperatura digitada em kelvin é "+(temp+273))


