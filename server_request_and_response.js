
//Importanto a biblioteca http do node.
let http = require('http');
const port = 3000;

//Criando um servidor com Node. Req = Request. Res = Response.
let server = http.createServer((req, res) => {

    //Pegando a rota (url requisitada)
    let category = req.url;

    if(category == '/tecnologia')
    {
        //Resposta usando end. Entregando um HTML de retorno
        res.end("<html lang='pt-BR'><head><meta charset='utf-8'></head><body><h1> Notícias de tecnologias </h1></body></html>");

    } else if(category == '/moda') 
    {

        res.end("<html lang='pt-BR'><head><meta charset='utf-8'></head><body><h1> Notícias sobre moda </h1></body></html>");

    } else 
    {

        res.end("<html lang='pt-BR'><head><meta charset='utf-8'></head><body><h1> Portal de notícias </h1></body></html>");
        
    }

});

//Porta que vai escutar este request
server.listen(3000);



