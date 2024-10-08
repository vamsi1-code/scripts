let timeoutID;

// Function to start the timer
function startTimer() {
    timeoutID = setTimeout(() => {
        console.log("Time's up!");
    }, 5000); // 5 seconds
}

// Function to cancel the timer
function cancelTimer() {
    clearTimeout(timeoutID);
    console.log("Timer cancelled!");
}

// Start the timer
startTimer();

// Cancel the timer after 3 seconds
setTimeout(() => {
    cancelTimer();
}, 7000); // Cancel after 3 seconds
