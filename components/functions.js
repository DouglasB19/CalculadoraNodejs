class Funcao{

    somar(req,res){
        const n1 = Number(req.body.number1);
        const n2 = Number(req.body.number2);
    
        const soma = n1 + n2;
        res.send(soma.toString());
    }

    subtrair(req,res){
        const n1 = Number(req.body.number1);
        const n2 = Number(req.body.number2);
    
        const subtrai = n1 - n2;
        res.render(subtrai);
    }

    multiplicar(req,res){
        const n1 = Number(req.body.number1);
        const n2 = Number(req.body.number2);
    
        const multiplica = n1 * n2;
        res.render(multiplica);
    }

    dividir(req,res){
        const n1 = Number(req.body.number1);
        const n2 = Number(req.body.number2);
    
        const divide = n1 / n2;
        res.render(divide);
    }
}
module.exports=Funcao;