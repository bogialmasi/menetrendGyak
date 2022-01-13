// adatbázisműveletek
const mysql = require('mysql');
const fs = require('fs');

console.log(__dirname, '/config/config.json');
fs.readFile(path.join(__dirname, '/config/config.json'),(err, data) => {
    if (err) throw err;
    const config = JSON.parse(data);
    return config;
})

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'menetrend',
    user: 'menetrend',
    password: 'menetrend',
});

// az alkalmazásba külső vagy érzékeny adatokat behuzalozni szigorúan tilos
// küldő config fájl (pl config.json) 

module.exports.dbRenderer = function(req, res) {
    query = "SELECT * FROM vonat;"
    con.query( myQuery, (err, result, fields) =>{
        if(err) throw err;
        const vonatok = JSON.parse(JSON.stringify(result));
})};

module.exports.vonatlista = function(vid) {
    query = "SELECT vnev, aid, ora, perc, jelleg FROM esemeny INNER JOIN vonat on vonat.vid=esemeny.vid WHERE vid=${vid};"
    con.query( query, (err, result, fields) =>{
        if (err) throw err;
        return JSON.parse(JSON.stringify(result));
    })
}