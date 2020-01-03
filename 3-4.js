//Challenge 1
/*
 printMsg = (time) => {
    console.log('Hello after ' + time + ' seconds.');
}

setTimeout(printMsg, 4000, 4);
setTimeout(printMsg, 8000, 8); 
//*/

//Chalenge 2
///*
var i = 1
interval = setInterval(() => {
    console.log('Hello World')
    i++;
    if (i > 5) {
        console.log('Done!')
        clearTimeout(interval);
    }
}, 1000);
//*/