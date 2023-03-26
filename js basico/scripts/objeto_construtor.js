/*function criarAluno(nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2
        }
    }
*/

function aluno(nome, n1, n2) {
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2
    this.media = function() {
        return (this.nota1 + this.nota2)/ 2
    }
}


var turma = {
   
}
    




var a = new aluno("joao", 8, 7)
console.log(a);

// console.log(turma.aluno1);
