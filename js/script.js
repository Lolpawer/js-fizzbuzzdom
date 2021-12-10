//programma che stampa in console i numeri da 1 a 100
//modifica : multipli di 3 stampa fizz
//multipli di 5 stampa buzz
//multipli di 3 e 5 stampa fizzbuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
};