let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


getLivrosDaAPI();

async function getLivrosDaAPI() {
    // res de resposta, await de esperar a resposta
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros)

    exibirLivrosNaTela(livrosComDesconto);
}


