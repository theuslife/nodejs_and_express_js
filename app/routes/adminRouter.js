module.exports = (application) => {
    
    application.get('/formulario_inclusao_noticia', (req, res) => {
        application.app.controllers.adminController.formulario_inclusao_noticia(application, req, res);
    });

    application.post('/noticias/update', (req, res) => {
        application.app.controllers.adminController.noticias_salvar(application, req, res);
    });

};
