const aluno = {
    matricula: 1234,
    nome: "anthony",
    telefone: "(11) 92345-6789",
    cidade: "Sao Paulo"
}

const aluno2 = {
    matricula: 4321,
    nome: "Pedro",
    telefone: "(11) 98765-4321",
    cidade: "Sao Paulo"
}

const {telefone, matricula, ...resto} = aluno

// console.log(telefone);
// console.log(resto);
// console.log(matricula);


let alunos = [aluno, aluno2]

let [anthony, joao] = alunos

console.log(anthony);