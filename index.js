const mysql= require('mysql');
const express= require ('express');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "123456"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

const app= express();
app.listen('3006', ()=>{
  console.log('server started on port 3306')
});


