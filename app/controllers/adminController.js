module.exports.formulario_inclusao_noticia = (application, req, res) => 
{
    res.render('admin/form_add_noticiaView', {validate: undefined, input: ''});
}

module.exports.noticias_salvar = (application, req, res) =>
{
    //Req.body trás a nossa requisição em formado JSON
    let postData = req.body;

    //===Validações===
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve ser no máximo 50 caracteres').len(1, 50);
        req.assert('noticia', 'Noticia é obrigatório').notEmpty();

        //True or false. Na qual retorna JSON
        let error = req.validationErrors();

        //Retorno vazio para parar a execução do módulo
        if(error)
        {
            res.render('admin/form_add_noticiaView', {validate: error, input: postData});
            return;
        }

        //Moment JS (Validações de datas/tempo)
        const moment = require('moment');
        let data_noticia = moment(req.body.data_noticia, "YYYY-MM-DD");
        if(!data_noticia.isValid())
        {
            error = [{msg: 'Data é obrigatório'}];
            res.render('admin/form_add_noticiaView', {validate: error, input: postData});
            return;
        }
        
    //===Final validações===

    let mysqlConnection = application.config.dbConnection();

    //Retornamos uma classe neste módulo abaixo. Portanto podemos criar um objeto a partir dele e enviar parâmetros no constructor
    let newsModel = new application.app.models.noticiasModels(mysqlConnection);

    newsModel.createNews(postData, (error, result) => {
        //Redirect
        console.log(postData);
        res.redirect('/noticias');
    });

}