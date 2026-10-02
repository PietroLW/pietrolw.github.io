// 1. EFEITO DIGITAÇÃO (TYPEWRITER)
const textoNome = "Seu Nome Aqui"; // <-- Altere para o seu nome real
let indice = 0;

function efeitoDigitacao() {
    const elementoDigitacao = document.getElementById("texto-digitacao");
    if (elementoDigitacao && indice < textoNome.length) {
        elementoDigitacao.innerHTML += textoNome.charAt(indice);
        indice++;
        setTimeout(efeitoDigitacao, 120);
    }
}

// Inicia o efeito assim que a página carrega
window.onload = efeitoDigitacao;

// 2. ALTERNADOR DE TEMA (CLARO/ESCURO)
const botaoTema = document.getElementById('alternador-tema');
if (botaoTema) {
    botaoTema.addEventListener('click', () => {
        document.body.classList.toggle('tema-claro');
    });
}

// 3. FILTRO DINÂMICO DE PROJETOS
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const cartoes = document.querySelectorAll('.cartao[data-categoria]');

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove classe ativa de todos e adiciona no clicado
        botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
        botao.classList.add('ativo');

        const valorFiltro = botao.getAttribute('data-filtro');

        cartoes.forEach(cartao => {
            if (valorFiltro === 'todos' || cartao.getAttribute('data-categoria') === valorFiltro) {
                cartao.style.display = 'block';
            } else {
                cartao.style.display = 'none';
            }
        });
    });
});
