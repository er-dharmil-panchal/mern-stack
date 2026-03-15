/*
     ---------------------------------
     FILE HANDLING IN NODE.JS (FS MODULE)
     ---------------------------------
     
     INDEX:
     1. Module Initialization
     2. Write Operations (Sync vs Async)
     3. The "Race Condition" Analysis
     4. Read Operations
     5. Append Operations
     6. File System Management (Copy, Delete, Stats)
     7. Directory Management (Mkdir, Rmdir)
*/

// ==========================================
// 1. MODULE INITIALIZATION
// ==========================================
// FS MODULE: File System is a built-in module in Node.js that allows interaction with the 
// computer's file system (Read, Write, Update, Delete).
const fs = require('fs');

// ==========================================
// 2. WRITE OPERATIONS
// ==========================================

/* * writeFileSync: Synchronous method. It creates/overwrites a file and blocks 
     the execution of the program until the write is 100% complete.
*/
fs.writeFileSync('./example.txt', 'Hello, this is a file handling example in Node.js!');

/* * writeFile: Asynchronous version. It initiates the write in the background 
     and immediately moves to the next line of code.
*/
fs.writeFile('./example.txt', 'Hello, this is a file handling example in Node.js! (Asynchronous)', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File written successfully!');
    }
});

/*
     * 🔥 DIFFERENCE BETWEEN SYNCHRONOUS AND ASYNCHRONOUS METHODS:
     - Synchronous: Blocks the program. The execution waits for the task to finish.
       Error handling is done via try-catch blocks.
     - Asynchronous: Non-blocking. Other operations continue while the task runs 
       in the background. Uses callbacks or promises for results/errors.
*/

// ==========================================
// 3. READ OPERATIONS
// ==========================================

// * Synchronous Read
const data = fs.readFileSync('./example.txt', 'utf-8');
console.log('Data read from file (Synchronous):', data);

// * Asynchronous Read
fs.readFile('./example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Data read from file (Asynchronous):', data);
    }
});

// ==========================================
// 4. APPEND OPERATIONS
// ==========================================

// * Synchronous Append
fs.appendFileSync('./example.txt', 'This line is appended to the file.\n');

// * Asynchronous Append
fs.appendFile('./example.txt', 'This line is appended to the file. (Asynchronous)\n', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data appended successfully!');
    }
});

/* 🔥 DEEP DIVE: THE "RACE CONDITION" EXPLAINED
    In this script, Sync commands appear to finish before Async because Async commands 
    require a "setup" time by the system.

    TIMELINE:
    1. fs.writeFileSync: Creates file. (State: Created)
    2. fs.writeFile (Async): Starts background process to overwrite. (Doesn't wait)
    3. fs.readFileSync: Reads the file immediately.
    4. fs.appendFileSync: Appends text immediately. (State: Original + Appended)
    5. Async Overwrite Finishes: The worker from Step 2 wipes the file to write its text.
       (State: Overwritten/Reset - This is why Sync text seems to "disappear").
    6. fs.appendFile (Async): Finishes last, adding its line to the new file.

    🔥 WHY WAS THE FIRST SYNC READ EMPTY?
    Because the Async write operation (writeFile) truncates (wipes) the file to 0 bytes 
    the moment it starts in the background. The Sync read happened exactly while the 
    file was being wiped for the Async write.
*/

// ==========================================
// 5. FILE SYSTEM MANAGEMENT
// ==========================================

// * Copying a file
fs.copyFileSync('./example.txt', './example_copy.txt'); // Synchronous

fs.copyFile('./example.txt', './example_copy.txt', (err) => { // Asynchronous
    if (err) {
        console.error('Error copying file:', err);
    } else {
        console.log('File copied successfully!');
    }
});

// * Deleting a file
fs.unlinkSync('./example_copy.txt'); // Synchronous

// * File Statistics
console.log(fs.statSync('./example.txt')); 
console.log('Is it a file?:', fs.statSync('./example.txt').isFile());

// ==========================================
// 6. DIRECTORY MANAGEMENT
// ==========================================

// * mkdir: Creating directories (recursive: true allows nested folder creation)
fs.mkdirSync('new_directory/a/b/c', { recursive: true }); 

// * rmdir: Removing directories
fs.rmdirSync('new_directory/a/b', { recursive: true });