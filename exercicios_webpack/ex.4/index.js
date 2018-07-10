const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto } //duplica...
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto, novoProduto)