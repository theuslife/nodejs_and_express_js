module.exports = (app) => {
    
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticiaView');
    });

    app.post('/noticias/update', (req, res) => {
        //Req.body trás a nossa requisição em formado JSON
        let postData = req.body;

        let mysqlConnection = app.config.dbConnection();
        let newsModel = new app.app.models.noticiasModels;

        newsModel.createNews(mysqlConnection, postData, (error, result) => {
            //Redirect
            res.redirect('/noticias');
        });

    });

};
