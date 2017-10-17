var mysql = require ('mysql');
var conn = mysql.createConnection ({
	host:'localhost',
	user:'HomeAutomation',
	password: 'Rbk1234*',
	database: 'users'
});

conn.connect(
	function(err){
		if(err){
			throw err;
		}
		console.log('Connection with mysql DB');

		var sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), passward INT, image varchar(255))";
		conn.query(sql, function(err,result){
			if(err){
				throw err;
			}
			console.log("CREATE TABLE usre");
		});
	});
