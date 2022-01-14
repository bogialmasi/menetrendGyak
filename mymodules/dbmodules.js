// adatbázisműveletek
const mysql = require('mysql');
const fs = require('fs');
const config = require('../config/config.json')
const path = require('path');

//console.log(__dirname, '/config/config.json');
fs.readFile(path.join(__dirname, config), (err, data) => {
    if (err) throw err;
    const config = JSON.parse(data);
    return config;
})

const con = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
});

// az alkalmazásba külső vagy érzékeny adatokat behuzalozni szigorúan tilos
// küldő config fájl (pl config.json) 

module.exports.dbRenderer = function (req, res) {
    query = "SELECT * FROM vonat;"
    con.query(myQuery, (err, result, fields) => {
        if (err) throw err;
        const vonatok = JSON.parse(JSON.stringify(result));
    })
};

module.exports.vonatlista = function (vid) {
    query = "SELECT vnev, aid, ora, perc, jelleg FROM esemeny INNER JOIN vonat on vonat.vid=esemeny.vid WHERE vid=${vid};"
    con.query(query, (err, result, fields) => {
        if (err) throw err;
        return JSON.parse(JSON.stringify(result));
        // nem lehet visszaadni mert async a query, ezért kell callback (mindig utolsó paraméter a callback)
    })
}

module.exports.vonatKodok = function( callback ){
    query = "SELECT vid, vnev FROM vonat;"
    con.query(query, (err, result, fields) =>{
        if (err) {callback(err, null)} // <--- hiba
        else {callback(null, JSON.parse(JSON.stringify(result)));} // <--- eredmény (hiba null, mellette adat)
    })
}