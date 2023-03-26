var alunos = ["anthony", "joana", "pedro", "paulo"]

var notaA = [7.0 , 7.5, 8 , 8.5]
var notaB = [8.0, 8.5, 9 , 9.5]

function media(n1, n2){
    return (n1 + n2) / 2
}

function situacao(media){
    if(media >= 7){
        return "aprovado"
    }else{
        return "reprovado"
    }
}

for (i in alunos){
    var n1 = notaA[i]
    var n2 = notaB[i]
    var m = media(n1, n2)


    console.log(alunos[i]+
                " - " +
               n1 +
               " - " +
               n2 +
               " - " +
               m +
               " - " +
               situacao(m))
}