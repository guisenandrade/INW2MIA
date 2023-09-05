function createEmail(){
var email = document.getElementById("email").value
var senha = document.getElementById("password").value
}

firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(user =>{
      console.log("usuario",user)
      alert("Usuario criado e logado")
    }).catch(err=>{
      console.erros("Erro ao criar usuario",err)
    })

    