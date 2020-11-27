function task (message) {
    let n = 10000000000;

    while ( n > 0 ) {
        n--;
    }

    console.log(message);
};

console.log('Start script ...');
setTimeout(() => {
    task('Download a file.');
}, 1000);
console.log('Done!');