const http = require("http");
const url = require("url");
const fs= require("fs");

const handleFile = (req, resp, calback) =>{
    let path = url.parse(req.url).pathname; //pegando o caminho da url
    
    if(calback){
        calback(req, resp);
    }

    let fileName =  "." + path;

    //lendo o caminho e tratando erro de nao encontrar a pagina
    fs.readFile(fileName, (err, data) => {
        if(err){
            if(calback){
                if(!calback(req, resp)){//se tiver o paremetro calback e ele estiver retornando false da pagina nao encontrada
                    resp.writeHead(404, {"Content-Value": "text/html;charset=UTF-8"});
                    resp.end("<h1>Pagina nao encontrada</h1>");
                };
            }    
        }
        else{
            resp.writeHead(200, {"Content-Value": "text/html"});
            resp.write(data);
            resp.end()
        }
    })

}

//manipulando algumas possiveis requisicoes
const handleRequest = (req, resp) => {
    let path = url.parse(req.url).pathname;
    let method = req.method;
    console.log(method);
    
    switch (path) {
        case "":
            path = "/index.html"; 
            break;

        case "/":
            path = "/index.html"; 
            break;
    
        case "/teste":
            resp.end("teste")
            break;
        
        default:
            break;
    }


}

//criando um servidor de pagina html
http.createServer((request, response) => { 
    handleFile(request, response, handleRequest)

}).listen(3000, (err) =>{
    if(err)
        console.log(err);
    else
        console.log("servidor rodando na porta 3000");


});
