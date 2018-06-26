var express = require('express');
var router = express.Router();

/*
var mysql = require('mysql');

const connection = mysql.createConnection(require('../config/dbconfig.js'));

connection.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log( 'mysql connect completed' );
});
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('dashboard/users');
  /*
  const sql = 'select * from member';
  connection.query(sql, (err, results, field) => {
          console.log(results); // 배열 형태로 결과가 떨어짐
          res.render('dashboard/users', {
              //layout: false, // express-ejs-layouts는 기본으로 layout.ejs가 설정되어야 하는데 이를 사용하지 않을 경우
              projects: results
          });
      });
  */
});

module.exports = router;
