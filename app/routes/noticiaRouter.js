module.exports = (app) => {

    app.get('/noticia', (req, res) => {
        
        let connection = app.config.dbConnection();
        let noticias = new app.app.models.noticiasModels;

        //Mandando um arrow function para dizer o que será feito após a query ter sucesso ou erro
        noticias.getNoticia(connection, (error, result) => {
            res.render('noticias/noticiaView', {news: result});
        });

    })

};
