const express = require('express');
const app = express();
const path = require('path');
let bodyParser = require("body-parser");
const PORT = 5000;


app.use(express.static(path.join(__dirname, 'client')));

const hello = (req, res) =>{
    res.send('<h1>helow world</h1>');
};

const consoleBody = (req, res, next) =>{
    console.log(req.body);
    next()//toda vez que o next receber um paramentro ira gerar um erro da classe 500
};

app.use("/", bodyParser.json())
app.use("/", consoleBody);

app.get("/", hello);

app.post("/", hello);

app.put("/", hello);

app.delete("/", hello);

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta: ${PORT}`);
});