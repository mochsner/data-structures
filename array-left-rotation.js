'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    
    main();
});

function rotate(a,d) {
    var s = "";
    for(var i=0;i<a.length;++i) {
        ((i + d) >= a.length) ? s += (a[i+d-a.length] + " ") : s += (a[i+d] + " ");
    }
    console.log(s.substring(0, s.length - 1));
}


function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10); // Number of rotations

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    
    rotate(a,d);
}
