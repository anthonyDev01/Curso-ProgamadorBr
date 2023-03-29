let nome = ""
try{
    if(nome == ""){
        throw "O nome nao pode ser vazio"
    }
    
    console.log(nome);

}catch(err){

    console.log("Houve um erro", err);
}


console.log("Boa Noite");