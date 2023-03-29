// replicar as funçoes do map e reduce sem usar eles

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
/*  funcionamento do map
function mapa(callback){

    let novoArray = []
    for(let aluno of this){
        novoArray.push(callback(aluno))
    }

    return novoArray
}
alunos.mapa = mapa

console.log(alunos.mapa(alunoDaqui5Anos));*/


function totalIdade(total, aluno){
    return total + aluno.idade
    
}

function reduzir(callback, valor){
    for(item of alunos){
        valor += callback(item)
    }
    return valor
}

console.log(reduzir(totalIdade, 0));