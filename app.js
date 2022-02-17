'use strict';
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const funcao=require('./components/functions');

let funcaos=new funcao();
let port=process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended: true}));

app.use('/css',express.static('css'));
app.use('/js',express.static('js'));

app.get('/', function(req, res){res.sendFile(__dirname+"/index.html")});

app.post('/', function(req, res){funcaos.somar(req,res)});

app.listen(port);