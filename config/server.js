//Lembre-se que estamos retornando uma função
module.exports = () => {

    let app = require('express')();

    //Autoloads
    let consign = require('consign');

    //Configurando qual módulo irá cuidar de nossa view engine
    app.set('view engine', 'ejs');
    //Configurando onde procurar as nossas views
    app.set('views', './app/views');

    //Consign inclui (faz um scan) de nossa rotas e joga os módulos destas rotas para nosso app (Nossa aplicação express). O consign já executa
    //Uma função ao chamar qualquer módulo
    consign().include('app/routes').then('config/dbConnection.js').into(app);    
    return app;

}