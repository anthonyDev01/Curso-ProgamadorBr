// exemplo da lista

let lista = document.getElementById("lista")

lista.dataset.cor ="red"

let num = parseInt(lista.dataset.num) 

let conteudo = ""

for(let i = 0; i < num; i++){
    conteudo += "<li>" + i +"</li>"
}

console.log(num);
lista.innerHTML = conteudo
