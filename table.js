import { createConnection } from 'mysql';


var con = createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (firstname VARCHAR(255), lastname VARCHAR(255),  city VARCHAR(255), mobile INT,)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });