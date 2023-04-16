const calculator = {
    displayValue: '0',
    firstOperand: '',
    secondOperand: '',
    readyForNextOperand: false,
    displayingDecimal: false,
    operator: '',
};
document.addEventListener('keydown', keyboardInput);
document.querySelector('.decimal').addEventListener('click', inputDecimal);
document.querySelector('#clear-all').addEventListener('click', clearAll);
document.querySelector('#delete').addEventListener('click', deleteNumber);

function clearAll() {
    calculator.displayValue = '0';
    calculator.firstOperand = '';
    calculator.secondOperand = '';
    calculator.readyForNextOperand = false;
    calculator.displayingDecimal = false;
    calculator.operator = '';
    updateZeroAndDecimal();
    updateScreen();
};
const zilch = document.getElementById('zero');
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
        if (event.target.value === '/') {
           document.querySelector('#zero').classList.add('hide');
           document.querySelector('.decimal').classList.add('double-width');} 
        else {
           zilch.classList.remove('hide', 'double-width');
           document.querySelector('.decimal').classList.remove('hide', 'double-width');
        }      
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
    updateZeroAndDecimal();
    updateScreen();
});

function inputDecimal() {
    if (calculator.readyForNextOperand === false) {
        calculator.firstOperand += '.';
        calculator.displayingDecimal = true;
        document.querySelector('.decimal').classList.add('hide');
        zilch.classList.add('double-width');
        calculator.displayValue = calculator.firstOperand;
        console.log("input number is: " + calculator.firstOperand);
        updateScreen();
    } else {
        calculator.secondOperand += '.';
        calculator.displayingDecimal = true;
        document.querySelector('.decimal').classList.add('hide');
        zilch.classList.add('double-width');
        calculator.displayValue = calculator.secondOperand;
        console.log("second input number is: " + calculator.secondOperand);
        updateScreen();
    }
    updateZeroAndDecimal();
}
function updateZeroAndDecimal() {
    const equalSign = document.querySelector('.equal-sign');
    const decimal = document.querySelector('.decimal');
    if (calculator.operator === '/' && calculator.readyForNextOperand && calculator.secondOperand==='') {
        zilch.classList.add('hide');
        decimal.classList.add('double-width');
        console.log('a');
    } else {
        zilch.classList.remove('hide', 'double-width');
        decimal.classList.remove('hide', 'double-width');
        console.log('b');
    }

    if (calculator.readyForNextOperand === false && calculator.firstOperand.includes('.')) {
        decimal.classList.add('hide');
        zilch.classList.add('double-width');
        console.log('c');
    } else if (calculator.readyForNextOperand === true && calculator.secondOperand.includes('.')) {
        decimal.classList.add('hide');
        zilch.classList.add('double-width');
        console.log('d');
    } else {
        decimal.classList.remove('hide');
        zilch.classList.remove('double-width');
        console.log('e');
    }

    if (equalSign.querySelector('.hide') && decimal.querySelector('.hide')) {
        equalSign.classList.add('quadruple-width');
        console.log('f');
    } else {
        equalSign.classList.remove('quadruple-width');
        console.log('g');
    }
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
    updateZeroAndDecimal();
}
function inputOperator(operator){
    calculator.operator = operator;
    calculator.readyForNextOperand = true;
    console.log("the current operator is: " + calculator.operator);
    updateZeroAndDecimal();
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
function deleteNumber(){
    if(calculator.readyForNextOperand === false){
        const editedText = calculator.firstOperand.slice(0, -1);
        calculator.firstOperand = editedText;
        calculator.displayValue = calculator.firstOperand;
        updateScreen();
    }
    else{
        const editedText = calculator.secondOperand.slice(0, -1);
        calculator.secondOperand = editedText;
        calculator.displayValue = calculator.secondOperand;
        updateScreen();
    }
}
function keyboardInput(e){
    console.log(e.key);
    if(e.key >= 0 && e.key <= 9){
        inputNumber(e.key);
    }
    else if(e.key === '.'){
        inputDecimal();
    }
    else if (e.key === '=' || e.key === 'Enter'){ 
        let calculation = operate(calculator.firstOperand, calculator.operator, calculator.secondOperand);
        calculator.displayValue = calculation;
        calculator.firstOperand = calculation;
        calculator.secondOperand = '';
        calculator.readyForNextOperand = true;
        calculator.operator = '';
        updateZeroAndDecimal();
        updateScreen();
    }
    else if (e.key === 'Backspace'){
        deleteNumber();
    }
    else if (e.key === 'Escape'){
        clearAll();
    }
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        inputOperator(e.key);
    }
}

