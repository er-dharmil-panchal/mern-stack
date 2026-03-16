// In this file, we will create a simple log entry system that writes log messages to a file with timestamps.


const fs = require('fs');

const logFunction = (action, ip = '127.0.0.1') => {
    const now = new Date();

    const logMessage = `[${now.toLocaleDateString()} | ${now.toLocaleTimeString()}] - Action: ${action}, IP: ${ip}\n`;
    fs.appendFile('./log.txt',logMessage, (err, msg) => {
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            console.log('Log entry added successfully.');
        }
    });   
};

// --- Test the Logger ---
logFunction('User logged in');