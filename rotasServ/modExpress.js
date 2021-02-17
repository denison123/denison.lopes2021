const express = require("express")
const app = express()
// rotas
// app.get("/",function(req,res){
//    res.send("Bem vindo!")
// })
app.get("/nome",function(req,res){
    res.send("DENISON")
})
app.get("/comida",function(req,res){
    res.send("CHURRASCO")
})


app.listen(3030,function(){
    console.log("Servidor Exp ON")
})
// rotas dinamicas (http://localhost:3031/ola/denison/Lopes/Pardo)
app.get("/ola/:nome/:sobreNome/:cor",function(req,res){
    res.send("<h1> Ola "+req.params.nome+"</h1>"+
             "<h2> Seu sobre nome e :"+req.params.sobreNome+"</h2>"+
             "<h3> Sua cor e :"+req.params.cor+"</h3>")
})

// renderizar HTML (rotas em html) obs: o arquivo html tem que esta na msm pasta onde fica as rotas ?
app.get("/",function(req,res){
    res.sendFile(__dirname+"/html/index.html")
})