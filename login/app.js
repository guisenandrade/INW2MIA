
const firebaseConfig = {
  apiKey: "AIzaSyBcOD3UjaVPNhMkBySZIa_sLninMPQngq4",
  authDomain: "projeto2miateste-61d61.firebaseapp.com",
  projectId: "projeto2miateste-61d61",
  storageBucket: "projeto2miateste-61d61.appspot.com",
  messagingSenderId: "174212832549",
  appId: "1:174212832549:web:7b56027f53419775d5cecc"
};

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const loginButton = document.getElementById("loginButton")

loginButton.addEventListener("click",() =>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) =>{
        const user = userCredential.user;
        console.log("Usuário logado  : ",user)
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.error("Erro de autenticação : ",errorMessage)

    } );

});