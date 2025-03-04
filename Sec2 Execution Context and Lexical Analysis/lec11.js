b(); 
console.log(a);
//calling function and variable before declaration -- executes function neverthless, variable undefined

// hoisting -- responsible for above phenomenon
// -- JS scans code first to get storage required for code execution
// -- looks for variables and functions, sets value of variables as undefined at first


var a = "Hello World";

function b(){
    console.log("Called b!");
}

b(); 
console.log(a);