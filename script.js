// Função para verificar a largura da tela e alterar a imagem
function updateImage() {
    const images = document.querySelectorAll('.carouselImage'); // Seleciona todas as imagens
    const screenWidth = window.innerWidth; // Pega a largura da tela

    images.forEach((image) => {
        // Verifica se a tela é mobile
        if (screenWidth <= 767) {
            // Altera para a versão mobile da imagem
            image.src = 'https://placehold.co/600x400';
            image.alt = 'Slide 600x400';
        } else {
            // Se não for mobile, mantém a imagem original
            image.src = 'https://placehold.co/1200x365';
            image.alt = 'Slide 1200x365';
        }
    });
}

// Chama a função quando a página for completamente carregada
document.addEventListener('DOMContentLoaded', updateImage);

// Chama a função quando a janela for redimensionada
window.addEventListener('resize', updateImage);