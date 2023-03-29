// ansync Await é outra maneira de utilizar promises

let usuairos = ["Adriano","Marcia", "José"];

function inserirUsuairos(nome,){

    let promise = new Promise(function (resolve, reject){
    
        setTimeout(() => {
            usuairos.push(nome);
            
            let error = false;


            if (!error){
                resolve();
            }else{
                reject({msg:"erro de alguma coisa"});
            }
        }, 1000);
    })
    return promise;
}

function listarUsuarios(){
    console.log(usuairos);
}

// o async antes de function é para poder utilizar o await
// o await faz com que o programa espere ate que a promise seja resolvida para executar a função inserirUsuario
async function executar(){
    await inserirUsuairos("anthony");
    listarUsuarios();

}

executar();