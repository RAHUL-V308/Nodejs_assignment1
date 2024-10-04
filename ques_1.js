//program for blocking and non blocking code
//Blocking code
const fs = require('fs');

console.log("Before reading file...");

const data = fs.readFileSync('sample.txt', 'utf8'); 
console.log("File content: ", data);

console.log("After reading file...");



/*
Before reading file...
File content: Hello, World!
After reading file...
*/


//Non Blocking code

const fs = require('fs');

// Non-blocking code: Read the content of a file asynchronously
console.log("Before reading file...");

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file", err);
    } else {
        console.log("File content: ", data);
    }
});

console.log("After reading file...");

/*
Before reading file...
After reading file...
File content: Hello, World!
*/