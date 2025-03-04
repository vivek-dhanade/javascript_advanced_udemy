var a;

a = "hi";

if(a) // if statement coerses the result of parenthesis to boolean value
{
    console.log("Something is there");
}


a = 0; // will get converted to false
// thus use (a || a===0 ) in case of possibility of a becoming zero and need condition to be true
if(a || a===0 )
{
    console.log("Something is there");
}
else
{
    console.log("Nothing is there");
}   