//Lembre-se que estamos retornando uma função
module.exports = () => {

    //Express
    let app = require('express')();

    //Autoload
    let consign = require('consign');

    //bodyParser para requisições
    let bodyParser = require('body-parser');


    //Configurando qual módulo irá cuidar de nossa view engine
    app.set('view engine', 'ejs');
    //Configurando onde procurar as nossas views
    app.set('views', './app/views');

    //Tratativas completas de requisições para retorna em JSON
    app.use(bodyParser.urlencoded({extended: true}));


    /* 
        Consign inclui (faz um scan) de nossa rotas e joga os módulos destas rotas para nosso app (Nossa aplicação express). O consign já executa uma função ao chamar qualquer módulo 
    */

    //Executa todas arquivos js nos quais incluimos nesta sintaxe
    consign().include('app/routes').then('config/dbConnection.js').then('app/models').into(app);    
    
    //Retorne o app
    return app;

}