const desafio = (Impar) =>{

    if(Impar< 0){
      return 'Negativo'
    }
        else if(Impar == 0){
            return 'Neutro'
        }
        else if (Impar%2 == 0){
           return 'Par'
        }
        else if (Impar%2 == 1){
            return 'Impar'
        }

}

console.log("O numero é",desafio(0))
console.log("O numero é",desafio(-1))
console.log("O numero é",desafio(1))
console.log("O numero é",desafio(2))