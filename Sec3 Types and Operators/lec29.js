function greet(name){
    console.log("Hello " + name);
}

greet(); // will not give error, instead due to execution context creation, name is already assigned a storage point and set to undefined

// thus will return Hello undefined -- also + operator is in application here, this coerses and concatenates undefined with a string, (javaScript behaviour)


function greet2(name){
    name = name || "<Your name here>"; 
    // -->   undefined || "<Your name here>" 
    // || will return the string which is not empty instead of true/false value

    console.log("Hello "+ name);
}

greet2();
greet2('Tony');
