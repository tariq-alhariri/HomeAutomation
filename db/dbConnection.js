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

        var sql =
            'CREATE TABLE user1 (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), passward INT, image varchar(255))';
        connection.query(sql, function(err, result) {
            if (err) {
                throw err;
            }
            console.log('CREATE TABLE usre');
        });
    });
module.exports = connection;
