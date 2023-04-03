let express = require("express")
let router = express.Router()

let alunos = [
    {id: 0, nome: "Anthony"},
    {id: 1, nome: "Igor"},
    {id: 2, nome: "Gabriel"},
    {id: 3, nome: "Arthur"}
]

router.get("/alunos",(req, res) =>{
    res.json(JSON.stringify(alunos))
})

router.get("/aluno", (req, res, next) =>{
    console.log(req.body);
    
    let aluno = alunos[req.body.id]
    if(aluno)
        res.json(aluno);
    else
        next()
})

router.get("/aluno", (req, res) =>{
    console.log(req.query);

    let aluno = alunos[req.query.id]
    if(aluno)
        res.json(aluno);
    else
        res.send("aluno nao encontrado");
})

router.get("/aluno/all", (req, res) =>{
    res.json(JSON.stringify(alunos))
})

//acessando aluno pelos parametros da url
router.get("/aluno/:id", (req, res) =>{
    console.log(req.params.id);
    let aluno = alunos[req.params.id]
    res.json(aluno);
})

module.exports = router;