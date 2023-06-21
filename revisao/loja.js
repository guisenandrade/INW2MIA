const leia =require("prompt-sync")()

let codigo =["COD001" , "COD002" , "COD003" , "COD004", "COD005"]
let produto = ["TECLADO" , "MOUSE" , "MONITOR" , "CADEIRA", "CPU"]
let valor = [20 , 10 , 150 ,700, 800]
let estoque = [0 , 0 , 0 ,0, 0]
let vendas = [0 , 0 , 0 ,0, 0]

console.log("CÓDIGO\tPRODUTO\tVALOR\tESTOQUE\tVENDAS")

for(let i =0; i<codigo.length;i++){
    console.log(codigo[i]+"\t"+produto[i]+"\t"+valor[i]+"\t"+estoque[i]+"\t"+vendas[i])
}

console.log("Mudando o numero do estoque")
for(let i = 0 ; i<codigo.length; i++){
    estoque[i] = leia("Digite o numero de estoque do "+produto[i])
}

console.log("CÓDIGO\tPRODUTO\tVALOR\tESTOQUE\tVENDAS")
for(let i =0; i<codigo.length;i++){
    console.log(codigo[i]+"\t"+produto[i]+"\t"+valor[i]+"\t"+estoque[i]+"\t"+vendas[i])
}


let precoprod = leia("Digite o codigo do produto desejado ").toUpperCase()
for(let i = 0 ; i<produto.length; i++){
    if(precoprod == codigo[i]){
        console.log("produto : "+produto[i])
        valor = leia("Digite a quantidade que você vai querer : ")
        
    }
}

console.log("CÓDIGO\tPRODUTO\tVALOR\tESTOQUE\tVENDAS")
for(let i =0; i<codigo.length;i++){
    console.log(codigo[i]+"\t"+produto[i]+"\t"+valor[i]+"\t"+estoque[i]+"\t"+vendas[i])
}

