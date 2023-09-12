function falarDepoisDe(segundos, frase) {
  return new Promisse((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
  
}

falarDepoisDe(3,"Olá turma 2mia")
.then(frase => frase.concat("texto da promisse!!!"))
.then(novaFrase => console.log(novaFrase))