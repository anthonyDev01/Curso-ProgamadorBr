//aula de argumentos e modulos


let args = process.argv.slice(2); //pegando argumentos passados no cmd

let a = Number(args[1]);
let b = Number(args[2]);
let calc = require("./mat/calc").calc//pegando as funcoes do modulo calc

//let soma = require("./calc").soma // passando so uma das funcoes
//console.log(calc(1, 2));

let c = "";

const validarArg = () =>{
    if (args[0] == "m") 
    c = calc.mult(a, b);
    else if(args[0] == "s")
        c = calc.soma(a, b);
    else
        c = "opcao invalida"
}

validarArg();
console.log(calc);





