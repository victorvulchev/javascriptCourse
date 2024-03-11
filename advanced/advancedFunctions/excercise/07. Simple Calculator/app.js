function calculator() {
    return {
        init:function(selector1, selector2, resultselector){
            this.firstNum = document.querySelector(selector1);
            this.secondNum = document.querySelector(selector2);
            this.resultRef = document.querySelector(resultselector);

        },
        add: function(){
            let result = Number(this.firstNum.value) + Number(this.secondNum.value);
            this.resultRef.value = result;
        },
        subtract: function(){
            let result = Number(this.firstNum.value) - Number(this.secondNum.value);
            this.resultRef.value = result;
        }
    }
}

const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');





