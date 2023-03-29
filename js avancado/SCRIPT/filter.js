/*um filter recebe um callback. O filter vai passar todos os seus elementos por esse callback, sempre que der verdadeiro ele vai retornar um novo array com esse elemento */

function novoAluno(nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno("anthony", 24),
    novoAluno("maria", 30),
    novoAluno("roberto", 45),
    novoAluno("paula", 1)
];
    
function alunoMenosDe30(aluno){
    return aluno.idade < 30;
}

let alunoComMenosDe30 = alunos.filter((aluno) =>{return aluno.idade < 30});


// o filter faz basicamento isso por "tras dos panos"
function filtro(callback){

    let alunosFiltrados = [];

    for(let aluno of this){
        if(callback(aluno)){
            alunosFiltrados.push(aluno);
        }
    }
    return alunosFiltrados;
}
alunos.filtro = filtro;
console.log(alunos.filtro(alunoMenosDe30));

console.log(alunos.filter(alunoMenosDe30)); // fez a mesma coisa do que a fução filtro que criei, só que em 1 linha

