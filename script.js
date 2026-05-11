// Adiciona um evento de clique a cada link de navegação
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Impede o comportamento padrão do link
        event.preventDefault();

        // Obtém o URL do link
        const url = link.getAttribute('href');

        // Redireciona para o URL
        window.location.href = url;
    });
});

// Adiciona um evento de clique a cada destaque de jogo
const gameHighlights = document.querySelectorAll('.game-highlight');
gameHighlights.forEach(highlight => {
    highlight.addEventListener('click', () => {
        // Obtém o título do jogo
        const gameTitle = highlight.querySelector('h3').textContent;

        // Redireciona para a página do jogo
        switch (gameTitle) {
            case "Marvel's Spider-Man 2":
                window.location.href = 'spider-man-2.html';
                break;
            case "Red Dead Redemption 2":
                window.location.href = 'red-dead-2.html';
                break;
            case "Cyberpunk 2077":
                window.location.href = 'cyberpunk-2077.html';
                break;
            case "God of War Ragnarök":
                window.location.href = 'god-of-war.html';
                break;
            case "EA Sports FC 25":
                window.location.href = 'ea-fc-25.html';
                break;
        }
    });
});