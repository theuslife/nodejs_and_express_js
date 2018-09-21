//Routes
//Recebendo o app como parâmetro
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('home/index');
    });
}