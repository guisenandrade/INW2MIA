// DESAFIO 1

const desafio = (Impar) =>{

    if(Impar< 0){
        console.log("Este numero é negativo")
    }
        else if(Impar == 0){
            console.log("Este numero é neutro")
        }
        else if (Impar%2 == 0){
            console.log("Este numero é par")
        }
        else if (Impar%2 == 1){
            console.log("Este numero é impar")
        }

}

desafio(2)