// js/index.js

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const usuarioInput = this.querySelector('input[type="text"]');
    const senhaInput = this.querySelector('input[type="password"]');

    console.log('Tentativa de login:');
    console.log('Usuário:', usuarioInput.value);
    console.log('Senha:', senhaInput.value);

    // Aqui você poderia adicionar a lógica real de autenticação,
    // como enviar os dados para um servidor.
    alert('Login simulado! Veja o console para os dados inseridos.');
  });

  const signupLink = document.querySelector('.signup a');
  if (signupLink) {
    signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Você clicou em "Cadastre-se"! (Funcionalidade não implementada)');
      // Aqui você poderia redirecionar o usuário para a página de cadastro.
    });
  }
});