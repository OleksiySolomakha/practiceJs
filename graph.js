// import {stack , A, B} from 'challenge';

const A = [
    [2,3,1],
    [9,1,3],
    [10,2,7]
];
const B = [
    [11,1,9],
    [6,2,4],
    [3,3,7]
];

// function stack(a,b) {
//     let aNumRow = a.length, aNumCol = a[0].length;
//     let bNumRow = b.length, bNumCol = b[0].length;
//     console.log(aNumCol,  bNumRow);
//     let m = new Array(aNumRow);
//     if (aNumCol === bNumRow) {
//         for (let r = 0; r < aNumRow; ++r) {
//             m[r] = new Array(bNumCol);
//             for (let c = 0; c < bNumCol; ++c) {
//                 m[r][c] = 0;
//                 for (let i = 0; i < aNumCol; ++i) {
//                     m[r][c] += a[r][i] * b[i][c];
//                 }
//             }
//         }
//         return m;
//     } else {
//         alert('Count off rows matrix A must match with count of columns matrix B');
//     }
// }
//
//
// let a = stack(A,B);
// console.log(a);

function svg(a,b) {

    let canvas = document.getElementById('canvas');
    let context =  canvas.getContext("2d");
    canvas.style.height = '500px';
    canvas.style.width = '500px';
    context.fillStyle = "black";
    context.fillRect(10, 10, 500, 500);
    let c = a.length;
    let d = b.length;
    for (let i = 0; i < c; i++){
        for (let o = 0; o < c[i].length; o++){
            let t = c[i][o];
            console.log('t', t);
        }
    }

    for (let z = 0; z < d; z++) {
        for (let q = 0; q < d[z].length; q++) {
            let f = d[z][q];
            console.log('f', f);
        }
    }

    let svg = document.getElementById('svg');
    svg.style.height ='400px';
    svg.style.width ='400px';
    let lines = document.getElementById('line');
    lines.value = 'x1=10 y1=10 x2=100 y2=100';
    lines.style.stroke = 'blue';
    // svg.path = 'l 100 100 ';
    // for(let i = 0 ; i < a.length; i++){
    //     for (let j = 0; j < a[i].length; j++){
    //         let x = a[i][j];
    //         let y = Math.sin(x);
    //         console.log(x);
    //         console.log(typeof x);
    //         console.log(y);
    //         console.log(typeof y);
    //         svg.style.stroke = 'blue';
    //         svg.path = 'L' + x +' ' + y;
    //     }
    // }
}
svg(A,B);
