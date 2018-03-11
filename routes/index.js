var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var db =mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'xiaojin',
  database: 'HR'
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.post('/',function(req,res,next) {
  var name=req.body.name;
  var PhoneNumber=req.body.PhoneNumber;
  var College=req.body.College;
  var CareerCenter=req.body.CareerCenter;
  var Department=req.body.Department;
  // if (!name&&!PhoneNumber&&!College&&!CareerCenter&&!Department) {
  //   console.log("dan qian cuowu");
  //   // req.send("qin tianxie wan bi");
  //   res.redirect("/");
  // } else {
    db.query(`INSERT INTO user (name, PhoneNumber, College, CareerCenter, Department) VALUE('${name}', '${PhoneNumber}', '${College}', '${CareerCenter}', '${Department}')`,function(err,data){
      console.log("into");
        if (err) {
          console.log(err);
          // req.send(500).send('database error').end();
        } else {

          console.log("87");
          res.redirect('/scan');
        }
      });

  // }

})
module.exports = router;
