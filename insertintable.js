con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (firstname, lastname,city, mobile  ) VALUES ('Rohit', 'kumar', 'alwar', '77')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });