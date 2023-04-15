const calculator = {
    displayValue: '0',
    firstOperand: '',
    secondOperand: '',
    readyForNextOperand: false,
    operator: '',
};

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

function addition(a, b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

function operate(a,b,o){
    
}

