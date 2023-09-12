let p = new Promise(function (cumpriPromessa) {
  cumpriPromessa(["Ana", "Bia", "Piettra buxa", "Daniel"])
})
 
p
.then(valor => valor[2])
.then(valor => console.log(valor))