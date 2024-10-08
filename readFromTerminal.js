const readline = require('readline');

// Create an interface to read lines from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Please enter something: ', (input) => {
    console.log(`You entered: ${input}`);
    
    // Close the interface after getting input
    rl.close();
});
