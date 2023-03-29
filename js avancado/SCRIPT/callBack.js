/* callback é passar uma fução de argumento de uma função */

let usuairos = ["Adriano","Marcia", "José"]

function inserirUsuairos(nome, callback){

    setTimeout(() => {
        usuairos.push(nome)
        callback()
    }, 1000)
}

function listarUsuarios(){
    console.log(usuairos);
}

inserirUsuairos("anthony", listarUsuarios)

