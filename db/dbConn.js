var mysql = require('mysql');

var connection = mysql.createConnection({
  // host:'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

connection.connect(
	function(err){
		if(err){ throw err; }
		console.log('Connection with mysql DB');
	});

module.exports = connection;


// var mysql = require ('mysql');
// var connection = mysql.createConnection ({
// 	host:'localhost',
// 	user:'root',
// 	password: '',
// 	database: 'users'
// });

// connection.connect(
// 	function(err){
// 		if(err){
// 			throw err;
// 		}
// 		console.log('Connection with mysql DB');

// 		connction.query("CREATE DATABASE users", function(err, result){
// 			if(err){
// 				throw err
// 			}
// 			console.log('CREATE DATABASE users DONE yahhhhhhhhhhhhhh');
// 		});

// 		var sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), passward INT, image varchar(255))";
// 		connction.query(sql, function(err,result){
// 			if(err){
// 				throw err;
// 			}
// 			console.log("CREATE TABLE usre");
// 		});
// 	})
