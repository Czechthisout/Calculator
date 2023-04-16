const calculator = {
    displayValue: '0',
    firstOperand: '',
    secondOperand: '',
    readyForNextOperand: false,
    operator: '',
};

document.querySelector('#clear-all').addEventListener('click', ()=>{
    calculator.displayValue = '0';
    calculator.firstOperand = '';
    calculator.secondOperand = '';
    calculator.readyForNextOperand = false;
    calculator.operator = '';
    updateScreen();
});

const numbers = document.querySelectorAll('.operand');
for (let i=0; i<numbers.length;i++){
    numbers[i].addEventListener('click', (event)=>{
        calculator.displayValue = event.target.value;
        inputNumber(event.target.value);
        console.log(event.target.value);
        updateScreen();
    })
}
const operators = document.querySelectorAll('.operator');
for (let i=0; i<operators.length;i++){
    operators[i].addEventListener('click', (event)=>{
        calculator.displayValue += event.target.value;
        inputOperator(event.target.value);
        console.log(event.target.value);
        updateScreen();      
    })
}
document.querySelector('.equal-sign').addEventListener('click', ()=>{
    let calculation = operate(calculator.firstOperand, calculator.operator, calculator.secondOperand);
    console.log('you should see a calculation of ' + calculation);
    calculator.displayValue = calculation;
    calculator.firstOperand = calculation;
    calculator.secondOperand = '';
    calculator.readyForNextOperand = true;
    calculator.operator = '';
    updateScreen();
});
document.querySelector('.decimal').addEventListener('click', ()=>{
    if (calculator.readyForNextOperand === false){
        calculator.firstOperand+='.';
        calculator.displayValue = calculator.firstOperand;
        console.log("input number is: " + calculator.firstOperand);
        updateScreen();}
    else{
        calculator.secondOperand+='.';
        calculator.displayValue=calculator.secondOperand;
        console.log("second input number is: " + calculator.secondOperand);
        updateScreen();
    }
});
function inputNumber(number){
    if (calculator.readyForNextOperand === false){
        calculator.firstOperand+=number;
        calculator.displayValue = calculator.firstOperand;
        console.log("input number is: " + calculator.firstOperand);
        updateScreen();}
    else{
        calculator.secondOperand+=number;
        calculator.displayValue=calculator.secondOperand;
        console.log("second input number is: " + calculator.secondOperand);
        updateScreen();
    }
}
function inputOperator(operator){
    calculator.operator = operator;
    //calculator.firstOperand = parseFloat(displayValue);
    calculator.readyForNextOperand = true;
    console.log("the current operator is: " + calculator.operator);
    updateScreen();
}
function updateScreen(){
    display = document.getElementById('calculator-screen');
    display.textContent = calculator.displayValue;
}
function operate(num1, op, num2){
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    if (op==='+'){
        return addition(a, b);
    }
    else if (op==='-'){
        return subtraction(a, b);
    }
    else if(op==='*'){
        return multiplication(a, b);
    }
    else if(op==='/'){
        return division(a, b);
    }
}
function addition(a, b){
    return Math.round((a+b)*1000)/1000;
}

function subtraction(a,b){
    return Math.round((a-b)*1000)/1000;
}

function multiplication(a,b){
    return Math.round((a*b)*1000)/1000;;
}

function division(a,b){
    return Math.round((a/b)*1000)/1000;;
}

