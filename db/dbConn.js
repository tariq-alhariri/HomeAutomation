var mysql = require ('mysql');
var connction = mysql.createConnection ({
	host:'localhost',
	user:'root',
	password: '',
	database: 'users'
});

connction.connect(
	function(err){
		if(err){
			throw err;
		}
		console.log('Connection with mysql DB');

		connction.query("CREATE DATABASE users", function(err, result){
			if(err){
				throw err
			}
			console.log('CREATE DATABASE users DONE yahhhhhhhhhhhhhh');
		});

		var sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), passward INT, image varchar(255))";
		connction.query(sql, function(err,result){
			if(err){
				throw err;
			}
			console.log("CREATE TABLE usre");
		});
	})

// CREATE DATABASE users;

// USE users;

// CREATE TABLE user (
//   /* Describe your table here.*/

//   id int NOT NULL AUTO_INCREMENT,
//   userid int NOT NULL,
//   name varchar(200)  NOT NULL,
//   image varchar(500),
//   passward varchar(200),
//   PRIMARY KEY (ID)
// );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/