// function for find cursor

function init() {
    if (document.layers) document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove = mousemove;
}
function mousemove(event) {
    var mouse_x = mouse_y = 0;
    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }
    status = "x = " + mouse_x + ", y = " + mouse_y;
    document.getElementById('xy').innerHTML = "x = " + mouse_x + ", y = " + mouse_y;
}
init();


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

    //Build coordinates
    canvas.style.height = '600px';
    canvas.style.width = '600px';
    context.beginPath();
    for (let x = 10; x < 450; x += 10){
        context.moveTo(x, 10);
        context.lineTo(x,450);
    }
    for (let y = 10; y < 450; y += 10){
        context.moveTo(10, y);
        context.lineTo(450, y);
    }
    context.strokeStyle = "black";
    context.stroke();

    //Built graph
    context.beginPath();
    context.moveTo(5,5);
    context.lineTo(290,5);
    context.moveTo(270, 0);
    context.lineTo(270, 0);
    context.lineTo(270,10);
    context.lineTo(300,5);
    context.moveTo(290, 0);
    context.moveTo(5,5);
    context.lineTo(5,150);
    context.lineTo(10,130);
    context.lineTo(0,130);
    context.lineTo(5,150);
    context.lineWidth = 1;
    context.strokeStyle = "red";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(50,50,50,25);
    context.strokeStyle = "green";
    context.stroke();

    //Built picture with matrix
    context.beginPath();
    context.moveTo(25,500);
    for (let i = 0; i < a.length && b.length; i++) {
        // I multiple variable to 10 for better visibility
        let x = a[i] * 5;
        let y = b[i] * 10;
        console.log('x = a[i]', x);
        console.log('y = b[i]', y);
        context.lineTo(x, y);
        context.strokeStyle = "blue";
    }
    context.stroke();
}

svg(A,B);
