Number.prototype.isPrime = function() {
    for( let i=2; i<Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const findPrime = (numberOfPrimes) => {
    const { performance } = require('perf_hooks');
    const start = performance.now();
    let primeCount = 0;
    let num = 2; // for math reasons, 1 is considered prime
    while( primeCount < numberOfPrimes ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }
    console.log(`The ${numberOfPrimes}th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}

// findPrime(1e4); // 104003
// findPrime(1e5); // 1297001
findPrime(1e6); // 15476717

