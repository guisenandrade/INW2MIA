class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf=cpf
        this.nome=nome
        this.anoNascimento=anoNascimento
    }

    mostrarIdade(){
        console.log(2023-this.anoNascimento)
    }
}

let cliente1 = new Pessoa("486.131.308.28","Guilherme",2006)
console.log(cliente1)
cliente1.mostrarIdade()
console.log(cliente1.nome)