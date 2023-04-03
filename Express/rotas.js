const express = require("express");
const app = express()
const PORT = 5000
const path = require('path')
let bodyParser = require('body-parser')
let aluno = require('./routes/aluno')



app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", aluno)

app.get("/", (req, res) =>{
    res.send('requisicao get')
})



app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta: ${PORT}`);
})

/*
*/