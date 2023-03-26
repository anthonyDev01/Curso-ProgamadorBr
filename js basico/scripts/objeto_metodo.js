function calcaMedia(){
    return (this.notas[0] + this.notas[1]) / 2
}
 
 
 
 var aluno = {
     nome: "joao",
     notas: [8, 9],
     media: calcaMedia
 }

var aluno1 = {
    nome: "pedro",
     notas: [6, 9],
     media: calcaMedia
}


 console.log(aluno.nome);
 console.log(aluno.media());

 console.log(aluno1.nome);
 console.log(aluno1.media());