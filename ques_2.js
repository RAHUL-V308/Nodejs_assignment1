//reading a file

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content: ", data);
    }
});

console.log("Reading file asynchronously...");

/* output
Reading file asynchronously...
File content:  Hello from Node.js
*/

//writing a file

const fs = require('fs');

const content = "This is some content for the file.";

fs.writeFile('newfile.txt', content, 'utf8', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File written successfully!");
    }
});

console.log("Writing to file asynchronously...");


/* output
Writing to file asynchronously...
File written successfully!
*/