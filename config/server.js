//Lembre-se que estamos retornando uma função
module.exports = () => {

    //Express
    const app = require('express')();

    //Autoload
    const consign = require('consign');

    //bodyParser para requisições
    const bodyParser = require('body-parser');

    //Express-validator
    const expressValidator = require('express-validator')();

    //Configurando qual módulo irá cuidar de nossa view engine
    app.set('view engine', 'ejs');

    //Configurando onde procurar as nossas views
    app.set('views', './app/views');


    //===Middlewares

    //Tratativas completas de requisições para retorna em JSON
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use(expressValidator);

    /* 
        Consign inclui (faz um scan) de nossa rotas e joga os módulos destas rotas para nosso app (Nossa aplicação express). O consign já executa uma função ao chamar qualquer módulo 
    */

    //Executa todas arquivos js nos quais incluimos nesta sintaxe
    consign().include('app/routes').then('config/dbConnection.js').then('app/models').then('app/controllers').into(app);    
    
    //Retorne o app
    return app;

}