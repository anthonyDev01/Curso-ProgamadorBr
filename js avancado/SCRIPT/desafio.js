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

function totalIdade(nomezao, aluno){
    return nomezao + aluno.idade
    
}

// funcionamento do map
/*function mapa(callback){

    let novoArray = []
    for(let aluno of this){
        novoArray.push(callback(aluno))
    }

    return novoArray
}
alunos.mapa = mapa

console.log(alunos.mapa(alunoDaqui5Anos));*/



// funcionamento do reduce
function reduzir(callback, valor){
    let tot = valor
    for(let aluno of alunos){
        tot += callback(valor, aluno)
    }
   return tot
   
}

console.log(reduzir(totalIdade, 0));