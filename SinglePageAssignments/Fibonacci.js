function fib() {
    // Some variables here
    var a = 0;
    var b = 1;
    
    function nacci() {
        // do something to those variables here
        let temp = a;
        a = b;
        b = temp + a;
        console.log(a);
    }

    return nacci;
}

var fibCounter = fib();
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
