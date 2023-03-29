// o map vai trazer um array novo que pode ser criado em cima dos elementos do array principal

// ele retorna um novo array, e no processo vc pode fazer alterações nos dados, e manter os dois array, o modificado e o original.

function novoAluno(nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno("anthony", 24),
    novoAluno("maria", 30),
    novoAluno("roberto", 45),
    novoAluno("paula", 1)
];
    
function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos"
}

function alunoDaqui5Anos(aluno){
    return {
        nome: aluno.nome,
        idade: aluno.idade + 5
    }
}

console.log(alunos.map(nomeIdade));

