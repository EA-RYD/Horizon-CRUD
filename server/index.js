const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'horizon_db',
});

//const sqlInsert = "INSERT INTO USERS VALUES (1,'eric@gmail.com','yo','4088304749','eric','arreola','USA','San Jose','CA','1256 Mcginness Ave','95127','2022-12-01')";
/*
app.get("/",(req,res)=> {
    
    
});

app.listen(3001,()=> {
    console.log('running on port 3001')
});
*/