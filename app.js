'use strict';
const express=require('express');
const app=express();
const bodyparser=require('body-parser');

let port=process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res)=>{res.sendFile(__dirname+"/index.html")});

app.listen(port);