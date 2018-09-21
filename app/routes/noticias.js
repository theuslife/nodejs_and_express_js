module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        
        let mysql = app.config.dbConnection();
        console.log('Conexão com o banco estabelicida');
        
        //Mandando uma query. Primeiro parâmetro é o código SQL e o segundo e o que será feito após a consulta
        mysql.query('SELECT * FROM noticias', (error, result) => {
                //Mandando de volta o resultado
                if(result !== undefined)
                {
                    //Retorna JSON. Enviamos para nossa view a variável list e error depedendo da condição
                    res.render('noticias/noticias', {list: result});
                } else 
                {
                    res.render('noticias/noticias', {error: error});
                }
                
        });
    })

};
