document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  const erroNome = document.getElementById("erro-nome");
  const erroEmail = document.getElementById("erro-email");
  const erroMensagem = document.getElementById("erro-mensagem");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valido = true;

  
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";

    // Validação do nome
    if (nome.value.trim() === "") {
      erroNome.textContent = "Por favor, digite seu nome.";
      valido = false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      erroEmail.textContent = "Por favor, digite seu email.";
      valido = false;
    } else if (!emailRegex.test(email.value.trim())) {
      erroEmail.textContent = "Email inválido.";
      valido = false;
    }


    if (mensagem.value.trim() === "") {
      erroMensagem.textContent = "Por favor, escreva uma mensagem.";
      valido = false;
    }


    if (valido) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }
  });


  const btnToggle = document.getElementById("toggle-form");

  btnToggle.addEventListener("click", function () {
    form.classList.toggle("hidden");
  });
});
