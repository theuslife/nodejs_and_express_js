module.exports = (application) => {

    application.get('/noticias', (req, res) => {
        application.app.controllers.noticiasController.noticias(application, req, res);  
    })

    application.get('/noticia', (req, res) => {
        application.app.controllers.noticiasController.noticia(application, req, res);    
    })

};
