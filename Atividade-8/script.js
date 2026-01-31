const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    msg.textContent = "Preencha todos os campos.";
    return;
  }

  msg.textContent = "Mensagem enviada (simulação). Obrigado!";
  form.reset();
});
