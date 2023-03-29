let pessoa = {
    nome: "anthony",
    idade: 16
}

let contato = {
    telefone: "(11) 12345-6789",
    email: "anthonychukwudi01@outlook.com"
}

let regiao = {
    cidade: "Sao Paulo",
    bairro: "Pq Cruzeiro do Sul"
}

let copia = {...pessoa, ...contato, cidade: regiao.cidade}



// ARRAYS

let notaAlunoA = [ 8, 9, 10, 10]
let notaAlunoB = [ 6, 7, 8, 9]

let copy = [...notaAlunoA, ...notaAlunoB]


console.log(copia);
console.log(copy);