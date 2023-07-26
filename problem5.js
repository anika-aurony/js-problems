// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator){
    let operation;
    if(operator == "+"){
        operation = sum;
    }
    
    else if(operator == "-"){
        operation = minus;
    }
    else if(operator == "*"){
        operation = multiply
    }
    else{
        operation = divide
    }
    const result = operation(num1, num2);
    return result;
}

const sum = (a, b)=> a+b;
const minus = (a, b)=> a-b;
const multiply = (a, b)=> a*b;
const divide = (a, b)=> a/b;

// check output
const result1 = calculator(5, 2, "/");
console.log(result1)
