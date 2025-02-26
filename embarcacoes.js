// Definir um objeto contendo as imagens separadas por embarcações
const imagensEmbarcacoes = {
  embarcacao01: [
    "assets/embarcacoes/embarcação01.webp",
    "assets/embarcacoes/embarcação02.webp",
    "assets/embarcacoes/embarcação03.webp",
  ],
  embarcacao02: [
    "assets/embarcacoes/embarcação01.webp",
    "assets/embarcacoes/embarcação02.webp",
    "assets/embarcacoes/embarcação02.webp",
  ],
  // Adicione mais embarcações conforme necessário
  embarcacao03: [
    "assets/embarcacoes/embarcação01.webp",
    "assets/embarcacoes/embarcação02.webp",
    "assets/embarcacoes/embarcação03.webp",
  ],
};

// Variáveis para controlar o lightbox e a imagem ativa
let currentEmbarcacao = "";
let currentImageIndexEmbarcacao = 0;

// Função para abrir o lightbox para uma embarcação específica e uma imagem específica
function abrirLightboxEmbarcacao(embarcacao, index) {
  currentEmbarcacao = embarcacao;
  currentImageIndexEmbarcacao = index;
  mostrarImagemEmbarcacao(); // Exibir a imagem inicial
  document.getElementById("lightbox-embarcacao").style.display = "flex";
}

// Função para fechar o lightbox
function fecharLightboxEmbarcacao() {
  document.getElementById("lightbox-embarcacao").style.display = "none";
}

// Função para alterar a imagem no lightbox
function alterarImagemEmbarcacao(n) {
  const totalImagens = imagensEmbarcacoes[currentEmbarcacao].length;
  currentImageIndexEmbarcacao =
    (currentImageIndexEmbarcacao + n + totalImagens) % totalImagens;
  mostrarImagemEmbarcacao();
}

// Função para exibir a imagem atual no lightbox
function mostrarImagemEmbarcacao() {
  const lightboxImagem = document.getElementById("lightbox-imagem-embarcacao");
  lightboxImagem.src =
    imagensEmbarcacoes[currentEmbarcacao][currentImageIndexEmbarcacao];
  console.log(
    "Exibindo:",
    imagensEmbarcacoes[currentEmbarcacao][currentImageIndexEmbarcacao]
  );
}

// Event listener para fechar o lightbox ao clicar no botão de fechar
document
  .querySelector(".fechar-embarcacao")
  .addEventListener("click", fecharLightboxEmbarcacao);
