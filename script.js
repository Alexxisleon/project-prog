document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede o envio real do formulário

    const username = form.querySelector("input[type='text']").value.trim();
    const password = form.querySelector("input[type='password']").value;

    // Simulação de login (valores fixos)
    if (username === "admin" && password === "1234") {
      alert("Login bem-sucedido!");
      // Redirecionar (simulação)
      window.location.href = "dashboard.html";
    } else {
      alert("Usuário ou senha incorretos.");
    }
  });
});
