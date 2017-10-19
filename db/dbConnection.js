var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Damna1998&q',
    database: 'users'
});

connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log('Connection with mysql DB');
    connection.query('CREATE DATABASE users', function(err, result) {
        if (err) {
            throw err;
        }
        console.log('CREATE DATABASE users DONE yahhhhhhhhhhhhhh');

        var sql =
            'CREATE TABLE user1 (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), passward INT, image varchar(255))';
        connection.query(sql, function(err, result) {
            if (err) {
                throw err;
            }
            console.log('CREATE TABLE usre');
        });
    });
});

module.exports = connection;
