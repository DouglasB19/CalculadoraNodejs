'use strict';
const express=require('express');
const app=express();
const bodyparser=require('body-parser');

let port=process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended: true}));

app.use('/css',express.static('css'));
app.use('/js',express.static('js'));

app.get('/', (req, res)=>{res.sendFile(__dirname+"/index.html")});

app.post('/', (req, res)=>{
    const n1 = Number(req.body.number1);
    const n2 = Number(req.body.number1);

    const soma = n1 + n2;

    res.send("Resultado da soma é : "+ soma);
})

app.listen(port);