/* no js quando atribuimos um objeto a outro ele vai como referencia ou seja objetoA é referencia para objetoB, entao tudo que for nodificado dentro de alunoB tbm é modificado em alunoA, a mesma coisa acontece com arrays, isso NAO acontece com tipos primitivos como number e str */



let turmaA = ["joao", "leticia", "bruno"]
let turmaB = turmaA.slice()
// let turmaB = [...turmaA]
turmaB.push("pedro")
console.log(turmaA); 



let alunoA ={
    nome: "arthur",
    idade: 19
}
let alunoB = Object.assign({}, alunoA);
// let alunoB = {...alunoA}

alunoB.idade = 29
console.log(alunoB);