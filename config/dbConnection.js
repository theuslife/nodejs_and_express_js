let connection = require('mysql');
   
let mysql = () => 
{
    return connection.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = () => 
{
    //Retornando uma função para ser executada
    return mysql;
}


//Conectando o MySql na nossa aplicação Node/Express. O parâmetro utiliza padrão JSON
