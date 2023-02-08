let btnOrdemValor = document.getElementById('btnOrdenarPorPreco');
btnOrdemValor.addEventListener('click', ordenarLivroPorPreco);

function ordenarLivroPorPreco(){
    let livrosOrdenadosPorPreco = livros.sort((a,b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenadosPorPreco);
}