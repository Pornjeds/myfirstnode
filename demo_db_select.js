var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "inventory_admin",
  password: "1nv3nt0ryAdmin",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});