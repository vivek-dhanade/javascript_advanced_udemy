
function waitThreeSeconds()
{
    var ms = 3000 + new Date().getTime();
    while(new Date() <  ms)
    {
    }

    console.log("finished function");
}

function clickHandler()
{
    console.log("Click event");
}

document.addEventListener('click', clickHandler); 
// asynchoronus function are executed/ event queue processed only after whole execution stack is finished
// so order execution stack > event queue

waitThreeSeconds();
console.log('finished execution');
