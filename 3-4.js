// Challenge 1
/*
 printMsg = (time) => {
    console.log('Hello after ' + time + ' seconds.');
}

setTimeout(printMsg, 4000, 4);
setTimeout(printMsg, 8000, 8); 
//*/

// Challenge 2
/*
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

// Extra Challenge 1

/*
Print "Hello World" forever. Starting with a delay of 1 second
but then incrementing the delay by 1 second each time.
The second time will have a delay of 2 seconds.
The third time will have a delay of 3 seconds.

Include the delay in the printed message
Hello world. 1
Hello world. 2
Hello world. 3
...

Constraints You can only use const (no let or var).
*/
///*
const seg = 1000
infMsg = (i) => {
    i++;
    console.log('Hello world. ' + i)
    setTimeout(infMsg, seg * i, i);
}

setTimeout(infMsg, seg, 0);
//*/
