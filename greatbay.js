var inquirer = require('inquirer')
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "bayDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  startAuction();
});

function startAuction() {
}

function postAnItem() {

}

function postDB() {

}

function displayDB() {
  
}

function bid() {
  
}

function updateBid() {
 
}

function checkBid() {
 
}