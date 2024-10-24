import { auth, googleProvider } from './firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";

// Login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Login form submitted');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Tentando login com email: ${email}`);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Login realizado com sucesso:', user);
            alert('Login realizado com sucesso!');
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Erro ao fazer login:', errorMessage);
            alert(`Erro ao fazer login: ${errorMessage}`);
        });
});

// Lógica para o botão de login manual
document.getElementById('login-btn').addEventListener('click', () => {
    loginForm.dispatchEvent(new Event('submit'));
});

document.getElementById('forgot-password').addEventListener('click', () => {
    const email = prompt('Digite o email associado à sua conta:');
    if (email) {
        console.log(`Tentando redefinir senha para o email: ${email}`);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Email de redefinição de senha enviado');
                alert('Email de redefinição de senha enviado!');
            })
            .catch((error) => {
                console.error('Erro ao enviar o email de redefinição:', error.message);
                alert(`Erro ao enviar o email: ${error.message}`);
            });
    }
});

document.getElementById('login-google').addEventListener('click', () => {
    console.log('Tentando login com Google');

    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log('Login com Google realizado com sucesso:', user);
            alert(`Login com Google realizado com sucesso! Bem-vindo, ${user.displayName}`);
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Erro ao fazer login com Google:', errorMessage);
            alert(`Erro ao fazer login com Google: ${errorMessage}`);
        });
});

// Registro
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Register form submitted');

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordAgain = document.getElementById('password-again').value;

    console.log(`Tentando registro com email: ${email}`);

    if (password !== passwordAgain) {
        console.error('As senhas não coincidem');
        alert("As senhas não coincidem!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Registro realizado com sucesso:', user);
            alert("Registro realizado com sucesso!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Erro ao registrar:', errorMessage);
            alert(`Erro ao registrar: ${errorMessage}`);
        });
});
