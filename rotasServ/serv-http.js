// servidor HTTP
var http = require("http")
http.createServer(function(req,res){
    res.end("Oi Bom dia!")
}).listen(3032)
console.log("Servidor http ON")