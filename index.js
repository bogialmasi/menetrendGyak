const express = require('express')
const dbData=require('./dbModule/dbMuveletek.js')
const port = 4444;

const app =express();

app.use( express.static( 'static',path.join(__dirname,"public")));

app.set('view engine', 'ejs');
// const
// = require(

app.get('/', (req,res) =>{

});

app.get('/vonatok', (req,res) =>{
    
});

app.get('/allomasok', (req,res) =>{
    
});

app.post('/ujvonat', (req,res) =>{
    
});

app.post('/deleteVonat',  (req,res) =>{
    
});

app.post('/idoModosit',  (req,res) =>{
    
});

app.listen(port);
