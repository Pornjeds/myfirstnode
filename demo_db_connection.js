var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "inventory_admin",
  password: "1nv3nt0ryAdmin",
  database : 'Inventory'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
