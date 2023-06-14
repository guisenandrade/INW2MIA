const leia = require ("prompt-sync")()

let limite = parseInt(leia("Digite um numero de vezes : "))

for(let x =1; x<=limite; x++){
    if(x%2 == 0){
        console.log(x+" é par")
    }
    else{
        console.log(x+" é impar")
    }
}

// DESAFIO 2

let total =0

for(let i = 1; i<=100; i++){
    if((i%2)== 1){
        if((i%3) == 0){
           console.log(i) 
           total += i
        }
    }

  
}
console.log("O total é "+total)

//DESAFIO 3

    let numero = 0
    let total2 = 0
    let maior = 0
    let contador = -1

 while(numero>=0){
    total2 += numero
    if(numero>maior){
        maior = numero
    }
    contador++
    numero = parseInt(leia("Digite um numero : "))
   
 }
 console.log("O total é : "+total2)
 console.log("fim de programa.")
 console.log("o maior numero é : "+maior)
 console.log("quantidade : "+contador)
