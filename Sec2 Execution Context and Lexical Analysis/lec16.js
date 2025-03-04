function b()
{
    var myVar;
    console.log(myVar);  // local exec context myVar
}

function a()
{
    var myVar=2;
    console.log(myVar); // local exec context myVar
    b();
}

var myVar=1;
console.log(myVar);  
a();
console.log(myVar); 



function c()
{
    myVar=45; // global exec context myVar
    console.log(myVar);
}
c();
console.log(myVar);


