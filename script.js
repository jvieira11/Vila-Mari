// Esta função é chamada pelos links na barra de navegação (navbar)
function showPage(pageId) {
    // 1. Pega todas as seções (páginas)
    const pages = document.querySelectorAll('main .page');
    
    // 2. Esconde todas elas removendo a classe "active"
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // 3. Pega o elemento da página que queremos mostrar (pelo ID)
    const pageToShow = document.getElementById(pageId);
    
    // 4. Mostra essa página adicionando a classe "active"
    if (pageToShow) {
        pageToShow.classList.add('active');
    }
}

// Opcional: Garante que a página "home" esteja visível 
// quando o site carregar pela primeira vez.
// (Já fizemos isso no HTML, mas é uma boa prática)
document.addEventListener('DOMContentLoaded', () => {
    // Esconde todas, exceto a 'home'
    showPage('home');
});