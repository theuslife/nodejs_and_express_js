//Retorna uma função
let express = require('express');
let app = express();

/*
    Set é para configurar qual módulo/biblioteca/framework
    Irá cuidar de certa parte do framework. Aqui estamos
    deixando a cargo de nossas views para que o EJS tome
    conta
*/

app.set('view engine', 'ejs');

//Routes no Express
app.get('/', (req, res)=> {
    
    //Arquivo a ser renderizado (Nosso HTML)
    res.render("index2");
    
});

app.get('/tecnologia', (req, res) => {
    //Podemos ocultar o nosso ".ejs"
    res.render("tecnologia");
});

//Utilizando listen para subir um servidor para nós
app.listen(3000, ()=>{

    console.log('Servidor rodando com Express');

}); 