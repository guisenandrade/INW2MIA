class Aviao{
    constructor(nome,capacidadePassageiros,peso,velocidade,velociadeMaxima,ligado){
        this.nome =  nome
       this.capacidadePassageiros = capacidadePassageiros
       this.peso = peso
       this.velocidade = velocidade
       this.velociadeMaxima = velociadeMaxima
       this.ligado =  ligado
    }

    ligar(){
        console.log("Ligando...")
        this.ligado =  true
    }

}

let Boeing777 = new Aviao("Boeing 777",550,247.200,0,800,false)
let Boeing737 = new Aviao("Boeing 737",650,297.200,0,950,false)



Boeing737.ligar()

console.log(Boeing737)