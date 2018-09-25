module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        
        //Ativando o database
        let mysql = app.config.dbConnection();
        let noticiasModels = new app.app.models.noticiasModels(mysql);

        //Vamos chamar um método dentro da nossa função do modulo noticiasModels
        noticiasModels.getNoticias((error, result) => {
            res.render('noticias/noticiasView', {news: result});
        });
        
    })

};
