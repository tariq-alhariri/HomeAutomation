/* Need to have MySQL running and Node server running
* for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node user Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      host:'localhost',
      user:'root',
      password: '',
      database: 'users'
    });
    dbConnection.connect();


    var tablename = 'user';
    
    /* Empty the db table before each test so that multiple tests
    * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert user\'s data to the DB', function(done) {
    // Post the user to the user server.
    // request({
    //   method: 'POST',
    //   uri: 'http://127.0.0.1:????',
    //   json: {}
    // }, function () {
    //     // Now if we look in the database, we should find the
    //     // new user there.
    //     var queryString = 'SELECT * FROM user';
    //     var queryArgs = [];

    //     dbConnection.query(queryString, queryArgs, function(err, results) {
    //       // Should have one result:
    //       expect(results.length).to.equal(1);
    //       done();
    //     });
    //   });
  });
});
