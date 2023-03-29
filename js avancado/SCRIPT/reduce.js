/*o reduce recebe 3 parâmetros, o valor total ou acumulador, o valor atual e o index.

Aqui o total é a soma das idades, o aluno é o valor que ele vai somar ao total, e o index n estamos usando, então temos um array com vários alunos e o reduce vai devolver o total no final que é a soma de todas as idades. */

function novoAluno(nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno("anthony", 24),
    novoAluno("maria", 30),
    novoAluno("roberto", 45),
    novoAluno("paula", 1)
];

function totalIdade(nomezao, aluno){
    return nomezao + aluno.nome
    
}


console.log(alunos.reduce(totalIdade, 0));