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

function svg(arr1,arr2){

    // create one mass from matrix

    let a = arr1.reduce(function(flat, current) {
        return flat.concat(current);
    }, []);

    let b = arr2.reduce(function(flat, current) {
        return flat.concat(current);
    }, []);

    console.log(a);
    console.log(b);

    let canvas = document.getElementById('canvas');
    let context =  canvas.getContext("2d");

    //Built a  graph layout
    // context.strokeStyle = "yellow";
    // context.moveTo(50,500);
    // context.lineTo(50,50);


    //Build rectangle
    canvas.style.height = '800px';
    canvas.style.width = '800px';
    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(400, 400);
    context.fillRect(10, 10, 500, 500);
    context.stroke();

    //Built picture with matrix
    context.beginPath();
    context.moveTo(100,500);
    for (let i = 0; i < a.length && b.length; i++) {
        // I multiple variable to 10 for better visibility
        let x = a[i] * 10;
        let y = b[i] * 10;
        console.log('x = a[i]', x);
        console.log('y = b[i]', y);
        context.lineTo(x, y);
        context.strokeStyle = "blue";
        context.stroke();
    }
}

svg(A,B);

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
