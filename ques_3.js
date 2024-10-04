//REPL Program to find odd or even

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkOddOrEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number.`);
    } else {
        console.log(`${num} is an odd number.`);
    }
}

function askNumber() {
    rl.question("Enter a number (or type 'exit' to quit): ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Exiting REPL...");
            rl.close();
        } else {
            const num = parseInt(input);
            if (!isNaN(num)) {
                checkOddOrEven(num);
            } else {
                console.log("Please enter a valid number.");
            }
            askNumber();
        }
    });
}

askNumber();


/*output
Enter a number (or type 'exit' to quit): 4
4 is an even number.
Enter a number (or type 'exit' to quit):


Enter a number (or type 'exit' to quit): 7
7 is an odd number.
Enter a number (or type 'exit' to quit):
*/