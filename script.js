/* ======== LÓGICA DE NAVEGAÇÃO DAS PÁGINAS ======== */

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

/* ======== LÓGICA DO TEMA ESCURO (NOVO) ======== */

// Seleciona os elementos que vamos usar
const themeSwitch = document.getElementById('theme-switch');
const bodyElement = document.body;

// Função para aplicar o tema
function aplicarTema(tema) {
    if (tema === 'dark') {
        bodyElement.classList.add('dark-mode');
        themeSwitch.checked = true; // Marca o checkbox
    } else {
        bodyElement.classList.remove('dark-mode');
        themeSwitch.checked = false; // Desmarca o checkbox
    }
}

// 1. Verifica se o usuário JÁ TEM uma preferência salva
document.addEventListener('DOMContentLoaded', () => {
    // Mostra a página 'home' (como já fazia antes)
    showPage('home');

    // Verifica o tema salvo no localStorage
    const temaSalvo = localStorage.getItem('theme');
    
    if (temaSalvo) {
        // Se achou um tema salvo, aplica ele
        aplicarTema(temaSalvo);
    } else {
        // Opcional: Verifica a preferência do sistema operacional do usuário
        const prefereEscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefereEscuro) {
            aplicarTema('dark');
        } else {
            aplicarTema('light');
        }
    }
});

// 2. Ouve por cliques no switch
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        // Se marcou, aplica o tema escuro e salva
        aplicarTema('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        // Se desmarcou, aplica o tema claro e salva
        aplicarTema('light');
        localStorage.setItem('theme', 'light');
    }
});