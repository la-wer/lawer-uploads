const googleLoginButton = document.getElementById('google-login');

const provider = new firebase.auth.GoogleAuthProvider();

googleLoginButton.addEventListener('click', () => {
  firebase.auth()
    .signInWithPopup(provider)
    .then(result => {
      console.log('Usuário logado com Google:', result.user);
    })
    .catch(error => {
      console.error('Erro ao autenticar com Google:', error);
    });
});

const normalLoginButton = document.getElementById('normal-login');
normalLoginButton.addEventListener('click', () => {
  const email = prompt("Digite seu email:");
  const password = prompt("Digite sua senha:");

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('Usuário logado normalmente:', userCredential.user);
    })
    .catch(error => {
      console.error('Erro ao fazer login normal:', error);
    });
});
