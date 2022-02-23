(function readyJS(win,doc){
    'use strict';

    let botao = doc.querySelectorAll(".button");
    let resultConta = doc.querySelector(".resultado");

    function calcu(event){
        //for(let i = 0; i < botao.length; i++){}
        console.log(event.target.id);
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
            case "+":
            case "-":
            case "X":
            case "/":
            case ".":
                let valor = resultConta.innerHTML;
                resultConta.innerHTML = valor + event.target.id;
                break;
        }
    }

    for(let i = 0; i < botao.length; i++){
        botao[i].addEventListener("click", calcu, false);
    }
})(window,document);