// Ordered Asynchronous Programming
// This will execute the async methods in an order

import fs from 'node:fs';

console.log("Synchronous First line");

fs.readFile('File1.txt',cb1);

function cb1(err,data)
{
    if(err)
        console.log(err);
    else
        console.log("File 1: "+ data.toString());
    fs.readFile("File2.txt",cb2)
}



function cb2(err,data)
{
    err ? console.log(err) : console.log("File 2: "+data.toString());
    fs.readFile("File3.txt",cb3)
}



function cb3(err,data)
{
    err ? console.log(err) : console.log("File 3: "+data.toString());
}

console.log("Synchronous Last line");


/**
 * Synchronous First line
Synchronous Last line
File 1: File 1: I am learning React.js
File 2: File 2 : I am learning Javascript
File 3: File 3: I am learning C#
 */