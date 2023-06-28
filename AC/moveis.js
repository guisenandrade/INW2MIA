


class ProdutoMoveis{
    constructor(id,descricao,ativo,estoque,preco,peso,tamanho,cor){
        this.id = id
        this.descricao = descricao
        this.ativo = ativo
        this.estoque = estoque
        this.preco = preco
        this.peso = peso
        this.tamanho = tamanho
        this.cor = cor
    }
    ativar(){
        this.ativo = true
    }

    retirarEstoque(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar com valor negativo")
            }
            else if( valor == 0){
                console.log("Impossível realizar com valor zerado")
            }
            else if(this.estoque < valor){
                console.log("Estoque insuficiente")
            }
            else{
                this.estoque = this.estoque - valor
            }
        }
       else{
        console.log("Conta inativa")
       }
    }   

    incluirEstoque(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar com valor negativo")
            }
            else if( valor == 0){
                console.log("Impossível realizar com valor zerado")
            }
            else if(this.estoque < valor){
                console.log("Estoque insuficiente")
            }
            else{
                this.estoque = this.estoque + valor
            }
        }
       else{
        console.log("Conta inativa")
       }
    }

}


//programa principal
const leia = require("prompt-sync")()
let tipo = ""
let valor = ""

console.log("Bem vindo a loja de móveis\n")

let verificar = leia("DESEJA FAZER COMPRAS S/N : ").toUpperCase()



    if (verificar == "S"){

        let id = leia("Digite o ID do produto : ")
        let descricao = leia("Digite a descrição do produto : ")
        let preco = leia("Digite o preco do produto : ")
        let peso = leia("Digite o peso do produto : ")
        let tamanho = leia("Digite o tamanho do produto : ")
        let cor = leia("Digite a cor do produto : ")

        let p1 = new ProdutoMoveis (id,descricao,false,10,preco,peso,tamanho,cor)

        console.log("Produto cadastrado com sucesso")

        p1.ativar


        for(let i = 0; i<=5 ; i++){

            console.log(p1)
            valor = leia("Quantos produtos deseja comprar : ")

            if(valor<=0){
                valor = leia("VALOR INDISPONÍVEL\n Quantos produtos deseja comprar : ")
            }
            p1.retirarEstoque(valor)

            console.log("Você ira pagar o total de "+(p1.preco*valor))

        }

        console.log(p1)

        valor = parseInt(leia("Quantos produtos deseja colocar no estoque : "))

        p1.incluirEstoque(valor)

        console.log(p1)

        let verificar = leia("DESEJA FAZER COMPRAS S/N : ").toUpperCase()
        }
            console.log("ATÉ BREVE")
        



