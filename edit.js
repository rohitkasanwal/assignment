con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE customers SET firstname = 'value' WHERE id = 'getid'";
    var sql = "UPDATE customers SET lastname = 'val123' WHERE id = 'getid'";
    var sql = "UPDATE customers SET city = '123' WHERE id = 'getid'";
    var sql = "UPDATE customers SET mobile = '23' WHERE id = 'getid'";

    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });