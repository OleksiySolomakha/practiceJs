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

function stack(a,b) {
    let aNumRow = a.length, aNumCol = a[0].length;
    let bNumRow = b.length, bNumCol = b[0].length;
    console.log(aNumCol,  bNumRow);
    let m = new Array(aNumRow);
    if (aNumCol === bNumRow) {
        for (let r = 0; r < aNumRow; ++r) {
            m[r] = new Array(bNumCol);
            for (let c = 0; c < bNumCol; ++c) {
                m[r][c] = 0;
                for (let i = 0; i < aNumCol; ++i) {
                    m[r][c] += a[r][i] * b[i][c];
                }
            }
        }
        return m;
    } else {
        alert('Count off rows matrix A must match with count of columns matrix B');
    }
}


stack(A,B);

function svg() {
    let canvas = document.getElementById('canvas');
    let context =  canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(10, 10, 100, 100);
};
svg();
