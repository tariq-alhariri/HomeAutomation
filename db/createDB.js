var mysql = require ('mysql');
var conn = mysql.createConnection ({
	host:'localhost',
	user:'HomeAutomation',
	password: 'Rbk1234*'
});

conn.connect(
	function(err){
		if(err){
			throw err;
		}
		console.log('Connection with mysql DB');
		conn.query("CREATE DATABASE users", function(err, result){
			if(err){
				throw err
			}
			console.log('CREATE DATABASE users DONE yahhhhhhhhhhhhhh');
		})
	})
