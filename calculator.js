
// ULTIMATE JAVASCRIPT CONSOLE BASED CALCULATOR!

// first download module - npm install prompt-sync

const prompt = require('prompt-sync')();

function calculator() {
    console.log('Advanced Calculator');
    console.log('Operations: +, -, *, /, ^ (power), % (modulo), sqrt (square root)');
    
    let history = [];
    
    while (true) {
        console.log('\nEnter "quit" to exit');
        
        let num1 = prompt('First number: ');
        if (num1.toLowerCase() === 'quit') break;
        num1 = parseFloat(num1);
        if (isNaN(num1)) {
            console.log('Please enter a valid number!');
            continue;
        }

        let operation = prompt('Operation: ');
        if (operation.toLowerCase() === 'quit') break;

        let num2 = null;
        if (operation !== 'sqrt') {
            num2 = prompt('Second number: ');
            if (num2.toLowerCase() === 'quit') break;
            num2 = parseFloat(num2);
            if (isNaN(num2)) {
                console.log('Please enter a valid number!');
                continue;
            }
        }

        let result;
        let validOperation = true;
        
        if (operation === '+') {
            result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '*') {
            result = num1 * num2;
        } else if (operation === '/') {
            if (num2 === 0) {
                console.log('Cannot divide by zero!');
                continue;
            }
            result = num1 / num2;
        } else if (operation === '^') {
            result = Math.pow(num1, num2);
        } else if (operation === '%') {
            if (num2 === 0) {
                console.log('Cannot modulo by zero!');
                continue;
            }
            result = num1 % num2;
        } else if (operation === 'sqrt') {
            if (num1 < 0) {
                console.log('Cannot calculate square root of negative number!');
                continue;
            }
            result = Math.sqrt(num1);
        } else {
            console.log('Invalid operation! Use +, -, *, /, ^, %, or sqrt');
            validOperation = false;
        }

        if (validOperation) {
            let calcString = operation === 'sqrt' 
                ? `sqrt(${num1}) = ${result}`
                : `${num1} ${operation} ${num2} = ${result}`;
            console.log(calcString);
            history.push(calcString);
        }

        let showHistory = prompt('Show history? (y/n): ');
        if (showHistory.toLowerCase() === 'y') {
            console.log('\nCalculation History:');
            history.forEach((calc, index) => {
                console.log(`${index + 1}. ${calc}`);
            });
        }
    }
    
    console.log('Calculator closed.');
}

calculator();
