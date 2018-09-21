/*
    A pesquisa do Require começa do node_modules. Criamos um arquivo
    de configuração como um módulo e estamos chamando ele 
*/

/* --- Config require --- */
let app = require('./config/server')();

//Exemplo de módulo. Estamos automaticamente chamando a função de nosso módulo criado
let msg = require('./modulo_teste')();

app.listen(3000, () => {

    console.log('Servidor rodando!');

})

