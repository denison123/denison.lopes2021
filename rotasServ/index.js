    const express = require("express")
    const app = express()
    const handlebars = require('express-handlebars')
    const Sequelize = require ('sequelize')
    const bodyParser = require('body-parser')

// config handlebars
    app.engine('handlebars',handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
// conexao com o banco de dados mysql
    const sequelize = new Sequelize('cadastro','root','123456',{
        host:'localhost',
        dialect:'mysql'
    })
// Body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json)
// rotas (acessiveis pelo GET)
app.get("/cad",function(req,res){
   res.render("formulario")
})
// rotas post receber dados do formulario (inacessivel pelo URL)
// app.post('/add',function(req,res){
//     res.send('Formulario Recebido!')
// })
app.post('/add',function(req,res){
    res.send("Texto: "+req.body.titulo+"Conteudo: "+req.body.conteudo)
})
// app.get("/nome",function(req,res){
//     res.send("DENISON")
// })
// app.get("/comida",function(req,res){
//     res.send("CHURRASCO")
// })


app.listen(3030,function(){
    console.log("Servidor Exp ON")
})
// // rotas dinamicas (http://localhost:3031/ola/denison/Lopes/Pardo)
// app.get("/ola/:nome/:sobreNome/:cor",function(req,res){
//     res.send("<h1> Ola "+req.params.nome+"</h1>"+
//              "<h2> Seu sobre nome e :"+req.params.sobreNome+"</h2>"+
//              "<h3> Sua cor é :"+req.params.cor+"</h3>")
// })
     
// renderizar HTML (rotas em html) obs: o arquivo html tem que esta na msm pasta onde fica as rotas ?
// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/html/index.html")
// })
