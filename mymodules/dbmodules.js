// adatbázisműveletek
const mysql = require('mysql');
const fs = require('fs');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'menetrend',
    user: 'menetrend',
    password: 'menetrend',
});

module.exports.dbRenderer = function(req, res) {
    query = "SELECT * FROM vonat;"
    con.query( myQuery, (err, result, fields) =>{
        if(err) throw err;
        const vonatok = JSON.parse(JSON.stringify(result));
})};