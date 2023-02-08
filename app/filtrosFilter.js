const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const valorBtn = document.getElementById(this.id)    
    let livrosFiltrados = valorBtn.value == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(valorBtn);

    exibirLivrosNaTela(livrosFiltrados);

    if (valorBtn.value == 'disponivel'){  
        const valorTotal = calcularValorTotal(livrosFiltrados);              
        exibirValorTotalNaTela(valorTotal)
    }
}

function filtrarPorCategoria(valorBtn) {
    return livros.filter(livro => livro.categoria == valorBtn.value);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalNaTela(valor){    
    valorTotalDeLivrosEmTela.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
    `
}