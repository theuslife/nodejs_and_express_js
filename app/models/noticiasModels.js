//Nosso módulo retorna uma classe Javascript
module.exports = () => 
{
    return class NoticiasModel
    {
        constructor(mysql)
        {
            this._mysqlConnection = mysql;
        }
        
        //Methods
        getNoticias(response)
        {
            this.mysqlConnection.query('SELECT * FROM noticias', response);   
        } 
    
        //Response é nossa função de retorno
        getNoticia(response) 
        {
            this.mysqlConnection.query('SELECT * FROM noticias WHERE id_noticia = 2', response);
        }
    
        createNews(postData, response) 
        {
    
            //É necessário que o JSON possua como índice dos elementos os mesmos nomes que as colunas da tabela
    
            //Set é um padrão suportado por MYSQL recuperar JSON
            this.mysqlConnection.query('insert into noticias set ?', postData, response);
    
        }

        get mysqlConnection()
        {
            return this._mysqlConnection;
        }

        set mysqlConnection(value)
        {
            this._mysqlConnection = value;
        }
    
    };

}