function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}
// a aplicação de desconto esta usando o metodo map do array livros (parametro passado pela função), aplicando dentro do livrosComDesconto
// uma arrowFunction e dando um retorno, o map vai passar de elemento em elemento.
// O retorno do map é {...livro} para que retorne todo o OBjeto, uma virgula e qual parte do objeto deve ser modificada;
// o retorno da função é o livrosComDesconto com todos os objetos intactos menos o preco.