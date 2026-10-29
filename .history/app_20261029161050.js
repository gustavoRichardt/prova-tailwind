document.addEventListener('DOMContentLoaded', () => {

    // 1. Adiciona evento de clique no menu hambúrguer com alerta e feedback visual de opacidade
    const menuHamburguer = document.querySelector('header img[alt="Menu hambúrguer."]');
    if (menuHamburguer) {
        menuHamburguer.addEventListener('click', () => {
            alert('Menu mobile acionado!');
            menuHamburguer.style.opacity = '0.5';
            setTimeout(() => { menuHamburguer.style.opacity = '1'; }, 300);
        });
    }

    // 2. Altera temporariamente o texto e a cor de fundo do botão "Search Now" ao ser clicado
    const searchButton = document.querySelector('.hero button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const textoOriginal = this.textContent;
            this.textContent = 'Searching...';
            this.style.backgroundColor = '#0c4a9e';
            
            setTimeout(() => {
                this.textContent = textoOriginal;
                this.style.backgroundColor = '#1565D8';
            }, 2000);
        });
    }

    // 3. Adiciona rolagem suave para o topo da página ao clicar no botão "Start Searching"
    const botoes = document.querySelectorAll('button');
    const startSearchingBtn = Array.from(botoes).find(btn => btn.textContent.trim() === 'Start Searching');
    if (startSearchingBtn) {
        startSearchingBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Cria e insere dinamicamente uma mensagem de sucesso no DOM ao clicar no botão de email
    const emailButton = document.querySelector('.cadastre-se .email');
    if (emailButton) {
        emailButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (!document.querySelector('.mensagem-sucesso')) {
                const mensagem = document.createElement('p');
                mensagem.textContent = 'Inscrição realizada com sucesso!';
                mensagem.className = 'mensagem-sucesso text-[#36B37E] font-bold mt-4 mb-0 text-sm';
                this.parentNode.insertBefore(mensagem, this.nextSibling);
            }
        });
    }

    // 5. Calcula o ano atual e anexa um novo parágrafo de direitos autorais no final do rodapé
    const rodapeFim = document.querySelector('.rodape-fim');
    if (rodapeFim) {
        const anoAtual = new Date().getFullYear();
        const textoDireitos = document.createElement('p');
        textoDireitos.textContent = `© ${anoAtual} Homey. Todos os direitos reservados.`;
        textoDireitos.className = 'text-[#5A7184] text-[14px] w-full text-center mt-4 lg:mt-0';
        rodapeFim.appendChild(textoDireitos);
    }
});