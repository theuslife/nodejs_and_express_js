module.exports.noticias = (application, req, res) => 
{
    //Ativando o database
    let mysql = application.config.dbConnection();

    //Retornamos uma classe neste módulo abaixo. Portanto podemos criar um objeto a partir dele e enviar parâmetros no constructor
    let noticiasModels = new application.app.models.noticiasModels(mysql);

    //Vamos chamar um método dentro da nossa função do modulo noticiasModels
    noticiasModels.getNoticias((error, result) => {
        res.render('noticias/noticiasView', {news: result});
    });
}

module.exports.noticia = (application, req, res) => 
{
    let mysqlConnection = application.config.dbConnection();

    //Retornamos uma classe neste módulo abaixo. Portanto podemos criar um objeto a partir dele e enviar parâmetros no constructor
    let noticias = new application.app.models.noticiasModels(mysqlConnection);

    //Mandando um arrow function para dizer o que será feito após a query ter sucesso ou erro
    noticias.getNoticia((error, result) => {
        res.render('noticias/noticiaView', {news: result});
    });
        
}