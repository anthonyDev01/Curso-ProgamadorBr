var nota1 = 8
var nota2 = 8

var media = (nota1 + nota2)/ 2

var conceito = ""

if (media >= 8){
    conceito = "otimo"
}

else if (media >= 6.5){
    conceito = "bom"
}

else{
    conceito = "regular"
}

console.log(media)
console.log(conceito)


switch(conceito){
    case  "otimo" :
        console.log("você é um otimo aluno")
        break;
    
    case "bom" :
        console.log("você é um bom aluno poré pode melhorar")
        break;
    
    case "regular":
        console.log("você precisa melhorar")
        break;

    default:
        console.log("erro")
}
