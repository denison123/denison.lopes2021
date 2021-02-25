// const Sequelize = require ('sequelize')
// const sequelize = new Sequelize('cadastro','root','123456',{
//     host:'localhost',
//     dialect:'mysql'
// })
// sequelize.authenticate().then(function(){
//     console.log('conectado com sucesso')
// }).catch(function(erro){
//     console.log('erro de coneccao'+erro)
// })
// // modelo de postagens (criando uma tabela)

// // const Postagens = sequelize.define('postagens',{
// //     titulo:{
// //         type: Sequelize.STRING
// //     },
// //     conteudo:{
// //         type: Sequelize.TEXT
// //     }
// // })

// const Teste = sequelize.define('teste',{
//     titulo:{
//         type:Sequelize.TEXT
//     },
//     conteudo:{
//         type: Sequelize.STRING
//     }
// })
// // inserindo dados na tabela 
// Teste.create({
//     titulo: 'denison',
//     conteudo: 'lopes'
// })
// // nome da tabela
// // Teste.sync({force:true})
