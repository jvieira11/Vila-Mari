/*LÓGICA DE NAVEGAÇÃO DAS PÁGINAS*/

function showPage(pageId) {
    const pages = document.querySelectorAll('main .page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }
}

/*LÓGICA DO TEMA ESCURO*/

const themeSwitch = document.getElementById('theme-switch');
const bodyElement = document.body;

function aplicarTema(tema) {
    if (tema === 'dark') {
        bodyElement.classList.add('dark-mode');
    } else {
        bodyElement.classList.remove('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');

    const temaSalvo = localStorage.getItem('theme');
    
    if (temaSalvo) {
        aplicarTema(temaSalvo);
    } else {
        const prefereEscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefereEscuro) {
            aplicarTema('dark');
        } else {
            aplicarTema('light');
        }
    }
});
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        aplicarTema('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        aplicarTema('light');
        localStorage.setItem('theme', 'light');
    }
});

/*LÓGICA DO MENU HAMBÚRGUER*/

const hamburger = document.querySelector('.hamburger-menu');
const menuWrapper = document.querySelector('.navbar-right');
const navLinks = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuWrapper.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menuWrapper.classList.remove('active');
    });
});