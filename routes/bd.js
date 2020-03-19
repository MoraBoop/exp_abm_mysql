var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",  
    user: "root",
    password: "",
    port: 3306,
    database:"tienda"
});

conn.connect(function(err){
    if(err) throw err;
    console.log('Conectado con mysql');
});

module.exports = conn;
