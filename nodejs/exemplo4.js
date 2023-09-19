// criação de função normal
function escreveNoConsole(){
    console.log("Primero exemplo - função normal")
}

// chama a função para executar
escreveNoConsole()

// variação de função normal ou declarada
const escreveNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variação do modo normal")
}

// chama a função para executar
escreveNoConsoleVariacao()

//  arrow function função seta ou flecha 
// todo arrow function usar os caracteres = junto com >
const escreveComArrow = ()=>{
    console.log("Terceira - Arrow Function")
}
// chama a função para executar
escreveComArrow()

// Arrow function com parametro
const escreverComArrowParametro = (texto) => {
    console.log(texto)
}

escreverComArrowParametro("Quarto exemplo, usando parametro")
escreveComArrow()
escreverComArrowParametro("outro texto")


// funcao arrow que somar dois valores
const somarDois = (numero1, numero2)=>{
    console.log('A soma é '+(numero1 + numero2))
}

// executando
console.log("-----------------------------------------")
somarDois(25,25)



// variação arrow function sem parentes e sem chave
const varianteArrow = texto => console.log(texto)

varianteArrow("José pai do bebe que ele vai ter em 2045 chamado joilson kaneto jr ayumi borges soares sena silva deo")



