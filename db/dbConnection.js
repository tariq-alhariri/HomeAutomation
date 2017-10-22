var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'users'
});

connection.connect(function(err) {
    if (err) {
        throw err;
    }
        console.log("db connected")
    });
module.exports = connection;
