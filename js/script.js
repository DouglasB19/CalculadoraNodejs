(function readyJS(win,doc){
    'use strict';

    let botao = doc.querySelectorAll(".button");
    let resultConta = doc.querySelector(".resultado");

    function calcu(event){
        let valor = resultConta.innerHTML;
        switch(event.target.id){
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                resultConta.innerHTML = valor + event.target.id;
                break;
            case ".":
                if(!valor.includes(".")){
                    resultConta.innerHTML = valor + event.target.id;
                }
                if(!valor.includes(".", valor.lastIndexOf("+"))){
                    resultConta.innerHTML = valor + event.target.id;
                }
                if(!valor.includes(".", valor.lastIndexOf("-"))){
                    resultConta.innerHTML = valor + event.target.id;
                }
                if(!valor.includes(".", valor.lastIndexOf("*"))){
                    resultConta.innerHTML = valor + event.target.id;
                }
                if(!valor.includes(".", valor.lastIndexOf("/"))){
                    resultConta.innerHTML = valor + event.target.id;
                }
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if(valor){
                    if(!valor.endsWith("+") && !valor.endsWith("-") && !valor.endsWith("*") && !valor.endsWith("/")){
                        resultConta.innerHTML = valor + event.target.id;
                    }
                }
                break;
            case "C":
                resultConta.innerHTML = "";
                break;
            case "<":
                resultConta.innerHTML = valor.substring(0, valor.length -1);
                break;
            case "=":
                if(valor){
                    resultConta.innerHTML = eval(valor);
                }
                break;
        }
    }

    for(let i = 0; i < botao.length; i++){
        botao[i].addEventListener("click", calcu, false);
    }
})(window,document);