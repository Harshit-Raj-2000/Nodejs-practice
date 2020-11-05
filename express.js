const express = require('express')
const mysql = require('mysql')
const app = express()
const bodyparser = require('body-parser');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NewDatabase"
})
app.get('/',(req,res) =>{
  res.sendFile(__dirname + '/index.html')
})

app.post('/adduser',(req,res)=>{
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let regNumber = req.body.regNumber;


  let query = 'INSERT INTO userinfo (firstName,lastName,regNumber) VALUES ("'+firstName+'","'+lastName+'", "'+regNumber+'")';
  con.query(query,(err,results)=>{
    if(err) {res.send(err.message);}
    else{ res.send({
      status:200,
      message:"data was entered"
    })}
  })
})

app.post("/update", (req, res) => {
  let regNumber = req.body.regNumber;
  let newFirst = req.body.newFirst;
  let newLast = req.body.newLast;

  let query = `UPDATE userinfo SET firstName = "${newFirst}" , lastName = "${newLast}" WHERE regNumber = ${regNumber} `;
  con.query(query, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send({
        status: 200,
        message: "Data is Updated.",
      });
    }
  });
});

app.post("/delete",(req,res)=>{
  let regNumber = req.body.regNumber;

  let query = `DELETE FROM userinfo WHERE  regNumber = ${regNumber} `;

  con.query(query, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send({
        status: 200,
        message: "Data was Deleted.",
      });
    }
  });

});




app.listen(4000,() => console.log('Server is running'))
