let numInput1 = '';
let numInput2 = '';
numbers = document.querySelectorAll('.operand');
for (let i=0; i<numbers.length;i++){
    numbers[i].addEventListener('click', (event)=>{
        numInput1 += event.target.value;
        console.log(event.target.value);
    })
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


