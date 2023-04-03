const express = require('express')
const app = express()
const path = require('path')

const PORT = 5000

/*
Protocolo HTTP

Requisicao
    Uma requisição tem 3 partes:

    *Linha de requisição: contem o metodo, o caminho e a versao do http

    *Header: Onde vai ter todas as informações de como tratar os dados 
    enviados a requisição

    *Body: onde vai conter os dados da requisição

Resposta
    Uma resposta tem 3 partes:

    *Status: cotem a vesao do http, status e mensagem do retorno do status
        dentro do codigo de status existem familias de possibilidade

        classe 100: são resposta meramente informativas, sao importantes para
        que quem fez a requisicao saiba como tratar a resposta

        classe 200: é quando uma resquisicao retorna algo com sucesso(quando retorna
            uma pagina html). Se for um requisicao que nao espera retornar
        uma pagina e sim um cadastro de um usuario por exeplo deve retornar
        o codigo 201

        classe 300: é quando o endereco que esta sendo requerido trocou de posicao

        classe 400: é quando alguma coisa deu errado no servidor por exemplo
        a requisicao de uma pagina que nao existe

        classe 500: é alguma erro que o servidor nao conseguiu lidar 

    *Header: Onde vai ter todas as informações de como tratar os dados 
    enviados a requisição

    *Body: onde vai conter os dados da requisição

    *
*/

//arquivos estaticos são html que nao mudam de acordo com uma requisicao
app.use(express.static(path.join(__dirname, 'client')))

app.get("/", (req, res) =>{
    //res.set('Content-Type', 'text/plain')(
    //res.type("html")
    res.send("<h1>helow world from get</h1>")
})

app.post("/", (req, res) =>{
    res.send("<h1>helow world from post</h1>")
})

app.put("/", (req, res) =>{
    res.send("<h1>helow world from put</h1>")
})

app.delete("/", (req, res) =>{
    res.send("<h1>helow world from delete</h1>")
})

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta: ${PORT}`);
});