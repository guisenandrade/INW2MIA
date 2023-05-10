class Animal{
    constructor(tipo,porte,femea,nascimento){
        this.tipo = tipo
        this.porte = porte
        this.femea = femea
        this.nascimento =  nascimento
    }

    fazerBarulho(){
        console.log("Fazendo barulho...")
    }

    retornaIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}

let macaco = new Animal("mamifero","medio",false,2020)
console.log(macaco)
console.log(macaco.porte)
macaco.fazerBarulho()



// PROGRAMA GATO


class Gato extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca
        this.cor = cor
    }
        miar(){
            console.log("miauuuuuuuu......")
        }
}

let gato =  new Gato("felino","Persa","preto")

console.log(gato)
console.log(gato.cor)
gato.fazerBarulho()
gato.miar()


// PROGRAMA CACHORRO

class Cachorro extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca
        this.cor = cor
    }
        latir(){
            console.log("auauauauau")
        }
}

let cachorro =  new Cachorro("felino","Husky","cinza")

console.log(cachorro)
console.log(cachorro.cor)
cachorro.fazerBarulho()
cachorro.latir()
cachorro.nascimento = 1975
console.log("A idade é "+cachorro.retornaIdade(2023))

    