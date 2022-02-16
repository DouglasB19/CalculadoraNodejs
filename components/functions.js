class Functions{

    somar(req,res){
        const n1 = req.body.number1;
        const n2 = req.body.number1;
    
        const soma = n1 + n2;
    }

    subtrair(req,res){
        const n1 = req.body.number1;
        const n2 = req.body.number1;
    
        const soma = n1 - n2;
    }

    multiplicar(req,res){
        const n1 = req.body.number1;
        const n2 = req.body.number1;
    
        const soma = n1 * n2;
    }

    dividir(req,res){
        const n1 = req.body.number1;
        const n2 = req.body.number1;
    
        const soma = n1 / n2;
    }
}
module.exports=Functions;