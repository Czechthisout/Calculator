const calculator = {
    displayValue: '0',
    firstOperand: '',
    secondOperand: '',
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
        calculator.displayValue = event.target.value;
        console.log(event.target.value);
        updateScreen();      
    })
}
function inputNumber(number){
    if(!calculator.operator){
        calculator.firstOperand+=number;
        calculator.displayValue = calculator.firstOperand;
        console.log("input number is: " + calculator.firstOperand);
        updateScreen();
    }
}
function updateScreen(){
    display = document.getElementById('calculator-screen');
    display.textContent = calculator.displayValue;
    //display.textContent = display.value;
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

