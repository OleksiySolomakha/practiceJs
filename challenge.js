let A = [
    [2,3,1],
    [9,1,3],
    [10,2,7]
];
let B = [
    [11,1,9],
    [6,2,4],
    [3,3,7]
];
document.write(A);
document.write('<br>');
document.write(B);
document.write('<br>');
document.write('--------------------------');
document.write('<br>');
// console.log(A);
// console.log(B);
function sortMatrix(arr) {
    let a = arr.length, k;
    let swap = false;

    for (let i = 0; i < a; ++i){
        let c = arr[i].length;
        swap = false;
        console.log('A', a);
        console.log('arr', arr);
        for (let z = 0; z <= c; z++){
            if (arr[i][z-1] >= arr[i][z]){
                k = arr[i][z-1];
                arr[i][z-1] = arr[i][z];
                arr[i][z] = k;
                swap = true;
            }
        //     tmp = arr[i][z];
        //
        //     console.log('+++++++++++++');
        //     console.log('k', k);
        //     console.log('+++++++++++++');
        //     console.log('c', c);
        //     console.log('z', z);
        //     console.log('tmp', tmp);
        }
    }
    return arr;
}
let C = sortMatrix(A);
let D = sortMatrix(B);
document.write(`Matrix A after sort  ${C}`);
document.write(`<br>`);
document.write(`++++++++++++++++`);
document.write(`<br>`);
document.write(`Matrix B after sort  ${D}`);
document.write(`<br>`);
document.write(`++++++++++++++++`);
    //
    // for (let b = arr.length-1; b >= 0; --b) {
    //     if(arr[b-1] >= arr[b]){
    //         let t = arr[b-1];
    //         arr[b-1] = arr[b];
    //         arr[b] = t;
    //     }
    //     document.write(`Изменения в масиве: ${arr}<br>`);
    // };

 let sortMat = function (arr) {
    arr.forEach(function(item, i, arr) {
        for (i = 0; i <arr.length; i++) {
            let m = arr[i];
            for (let j = 0; j < m.length; j++) {
                m.sort((a, b) =>
                    // I don't know why it's work correct
                    a[j] - b[j]
                )
            }
        }
    });
     return arr;

 };

let aSort = sortMat(A);
// // console.log(aSort[0][0]);
// let bSort = sortMat(B);

// document.write(aSort);
// document.write(`<br> =========== <br>`);
// document.write(bSort);
// document.write(`<br> =========== <br>`);
// document.write(`<br>`);

function multiplys (arr1,arr2) {
   arr1.forEach(function (item, i, arr1) {
       for (let j = 0; j < arr1[i].length; j++) {
           arr2.forEach(function (item, i, arr2){
               for (let j = 0; j < arr2[i].length; j++) {

                   let z = arr1[i][j];
                   let m = arr2[i][j];
                   console.log('=============');
                   console.log(z);
                   console.log(m);
                   console.log('++++++++++++');
                   let c = z * m;
                   let t = [];
                    t[i] = arr2.push(c);
                   // console.log(c);
                   // let y = [];
                   // y[i] = c;
                   console.log(t);
                   return t;
                    }
                });
           // return arr1[i][j];
           let z = arr1[i][j];
           let m = arr2[i][j];
           // console.log('=============');
           // console.log(z);
           // console.log(m);
           // console.log('++++++++++++');
           let c = z * m;
           // console.log(c);
           let y = [];
           y[i] = c;
           // console.log(y);
           return y;
       }
       // let z = arr1[i][j];
       // let m = arr2[i][j];
       // console.log('=============');
       // console.log(z);
       // console.log(m);
       // console.log('++++++++++++');
       // let c = z * m;
       // console.log(c);
       // let y = [];
       // y[i] = c;
       // console.log(arr1);
       return arr1;
    });
}

// multiplys(aSort, bSort);


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

// const t = stack(aSort, bSort);

function display(m) {
    m.forEach(function (item,r,m) {
        document.write(`<br>`);
        document.write('&nbsp;&nbsp;'+m[r].join(' ')+'<br />');
        });
}
// display(t);

function transpon(a) {
    // let a =[[1,2],[3,4]];
    let aNumRow = a.length, aNumCol = a[0].length;
    let m = new Array(aNumRow);
        for (let i = 0; i <aNumRow; ++i) {
            m[i] = [];
            for (let j = 0; j < aNumCol; ++j) {
                let t = a[i][j];
                m[j] = t;
                console.log('++++++++');
                console.log('m',m);
                console.log(a);
                console.log(t);
                console.log('++++++++');
            }
            let v = a[i];
            m[i] = v;
            console.log('=============');
            console.log(a);
            console.log('=============');
        }
}
// transpon(aSort);
