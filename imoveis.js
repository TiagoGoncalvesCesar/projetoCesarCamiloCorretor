// Definir um objeto contendo as imagens separadas por imóveis
const imagens = {
  imovel01: [
    "assets/imovel-01/img01.jpg",
    "assets/imovel-01/img02.jpg",
    "assets/imovel-01/img03.jpg",
    "assets/imovel-01/img04.jpg",
    "assets/imovel-01/img05.jpg",
  ],
  imovel02: [
    "assets/imovel-02/imagem01.webp",
    "assets/imovel-02/imagem02.webp",
    "assets/imovel-02/imagem03.webp",
  ],
   // Adicione mais imóveis conforme necessário
  imovel03: [
    "assets/imovel-03/img01-03.jpg",
    "assets/imovel-03/img02-03.jpeg",
    "assets/imovel-03/img03-03.jpg"
  ], 
  imovel04: [
    "assets/imovel-04/img01-04.jpg",
    "assets/imovel-04/img02-04.jpg",
    "assets/imovel-04/img03-04.jpg"
  ]
};

// Variáveis para controlar o lightbox e a imagem ativa
let currentImovel = "";
let currentImageIndex = 0;

// Função para abrir o lightbox para um imóvel específico e uma imagem específica
function abrirLightbox(imovel, index) {
  currentImovel = imovel;
  currentImageIndex = index;
  mostrarImagem(); // Exibir a imagem inicial
  document.getElementById("lightbox").style.display = "flex";
}

// Função para fechar o lightbox
function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Função para alterar a imagem no lightbox
function alterarImagem(n) {
  const totalImagens = imagens[currentImovel].length;
  currentImageIndex = (currentImageIndex + n + totalImagens) % totalImagens;
  mostrarImagem();
}

// Função para exibir a imagem atual no lightbox
function mostrarImagem() {
  const lightboxImagem = document.getElementById("lightbox-imagem");
  lightboxImagem.src = imagens[currentImovel][currentImageIndex];
  console.log("Exibindo:", imagens[currentImovel][currentImageIndex]);
}

// Event listener para fechar o lightbox ao clicar no botão de fechar
document.querySelector(".fechar").addEventListener("click", fecharLightbox);


