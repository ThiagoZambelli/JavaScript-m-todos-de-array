const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const valorBtn = document.getElementById(this.id)    
    let livrosFiltrados = livros.filter(livro => livro.categoria == valorBtn.value)
    exibirLivrosNaTela(livrosFiltrados);

}