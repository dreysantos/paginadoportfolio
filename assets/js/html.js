// Abre o link em nova aba
function abrirLink(url) {
  window.open(url, "_blank");
}

// Animação suave ao rolar a página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Efeito de entrada nos cards ao rolar a tela
const cards = document.querySelectorAll(".card");

function mostrarCards() {
  const alturaTela = window.innerHeight;
  cards.forEach(card => {
    const distanciaTop = card.getBoundingClientRect().top;
    if (distanciaTop < alturaTela - 50) {
      card.classList.add("aparecer");
    }
  });
}

window.addEventListener("scroll", mostrarCards);
mostrarCards(); // chama na carga inicial