// Synchronous programming ( single threaded )
// We will be using "fs" library to read data from file
import fs from 'node:fs';


console.log("First Line");

let fileText = fs.readFileSync("./File1.txt");

console.log(fileText.toString());
console.log("Last Line");
