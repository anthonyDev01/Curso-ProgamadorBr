let fs = require("fs");

//metodo para criar um novo arquivo recebe como paramentros: nome do arquivo, mensagem do arquivo e uma call back

/*fs.writeFile("teste.txt", "Hello World", (error) => {
    if(error)
        throw error
    console.log("arquivo craido com sucesso");

})*/

//metodo para concatenar um arquivo ja existente recebe como paramentros: nome do arquivo, mensagem do arquivo e uma call back

/*fs.appendFile("teste.txt", "- Ola Mundo", (error) => {
    if(error)
        throw error
    console.log("arquivo cocatenado com sucesso");

})*/

//metodo para excluir um arquivo recebe como paramentros: nome do arquivo, e uma call back

/*fs.unlink("teste.txt", (error) => {
    if(error)
        throw error
    console.log("arquivo apagado com sucesso");

})*/


//metodo para renomear um arquvio recebe como prametros: nome do aquivo, novo nome do arquivo e uma call back
/*fs.rename("teste.txt", "arquivo.txt", (error) => {
    if(error)
        throw error
    console.log("arquivo renomeado com sucesso");
})*/

//

//metodo para ler um arquvio recebe como prametros: nome do aquivo, formato de codificacao e uma call back que recebe erro e os dados do aquivo
/*fs.readFile("arquivo.txt", "UTF8", (error, data) => {
    if(error)
        throw error

    console.log(data);
})*/

//sisteminha pra ler um arquivo e passar o conteudo pra letra maiuscula

let args = process.argv.slice(2);

let filename = args[0];

fs.readFile(filename, "UTF8", (erro, data) =>{
    if(erro) throw erro

    fs.writeFile(filename + "_upperCase", data.toUpperCase(), (erro) => {
        if (erro) throw erro

        console.log("arquivo criado com sucesso");
        

    })

})
