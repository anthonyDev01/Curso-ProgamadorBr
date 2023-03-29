// promisses fazem a mesma coisa que callback mas de uma maneira melhor

let usuairos = [
    "Adriano","Marcia", "José"
]



function inserirUsuairos(nome){

    let promise = new Promise(function (resolve, reject){
    
        setTimeout(() => {
            usuairos.push(nome)
            
            let error = false


            if (!error){
                resolve()
            }else{
                reject({msg:"erro de alguma coisa"})
            }


        }, 1000)
    })
    return promise
}

function listarUsuarios(){
    console.log(usuairos);
}

 //then quer dizer que so vai exucutar quando der resolve na promisse. Ele é como o argumento do callback
//cath serve para tratar o erro
inserirUsuairos("anthony").then(listarUsuarios)
    .catch(error => {
        console.log(error.msg);
    })

