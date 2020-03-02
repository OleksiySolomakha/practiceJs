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

const C = [
    [1,2,3],
    [9,8,7],
    [10,12,11]
];

const D = [
     [11,13,12],
     [9,15,31],
     [10,22,27]
    ];


let AA = function(arr){
    let p = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            let k = arr[i][j];
            p.push(k);
        }
    }
    // console.log('p',p);
    return p.sort((a,b) => a - b);
};

// create simple mass and sort it
let net = AA(A);
let cet = AA(B);
let net1 = AA(C);
let cet1 = AA(D);

let decNumb = 15;

let firstPart = [];
let secondPart = [];

function createXY(arr1,arr2,decNumb) {

    console.log('arr1',arr1);
    console.log('++++++++++++++');
    console.log('arr2',arr2);
    let c = [];
    for (let i = 0; i < arr1.length && arr2.length; i++) {
            let a = [];
            a[0] = arr1[i] * decNumb;
            console.log('a[0]', a[0]);
            a[1] = arr2[i] * decNumb;
            console.log('a[1]', a[1]);
            c.push(a);
        }
    console.log('c', c);
    return c;
}

let width = 420,
    height = 420;


let svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height',height)
    .attr('class', 'axis');

let bod =svg.append('rect')
    .attr('x',0)
    .attr('y',0)
    .attr('width',width)
    .attr('height',height)
    .attr('fill', 'aqua');

function Axises() {
    // Create scale X
    let scale = d3.scaleLinear()
        .domain([0, d3.max(net)])
        .range([0, 380]);

// Add scales to axis
    let x_axis = d3.axisBottom()
        .scale(scale);

//Append group and insert axis

    let xAxisTranslate = height - 20;

    svg.append('g')
        .attr('class','axisX')
        .attr('transform', 'translate(25, ' + xAxisTranslate  +')')
        .call(x_axis);

// Create scale Y
    let scaleY = d3.scaleLinear()
        .domain([0, d3.max(cet)])
        .range([380, 0]);

// Add scales to axis
    let y_axis = d3.axisLeft()
        .scale(scaleY);

// Append group and insert axis
    svg.append('g')
        .attr('class','axisY')
        .attr('transform', 'translate(25, 20)')
        .call(y_axis);
}

function changeAxis() {

    // создаем набор вертикальных линий для сетки
    d3.selectAll('g')
        .append('line') // добавляем линию
        .classed('grid-line', true) // добавляем класс
        .attr('stroke', 'red')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', height-800);

// рисуем горизонтальные линии
    d3.selectAll('g')
        .append('line')
        .classed('grid-line', true)
        .attr('stroke', 'red')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', width-40)
        .attr('y2', 0);
};

let lineFunc = d3.line()
    .x(function(d) { return d.x })
    .y(function(d) { return d.y });

// Create lines
let myline =  function (data){
    svg.append('polyline')
    .attr('transform', 'translate(20, 0)')
    .attr('points', data )
    .attr('stroke', 'yellow')
    .style('stroke-width', 5)
    .style('stroke-linejoin', 'round')
    .attr('fill','none');
};

let myline1 =  function (data){
    svg.append('polyline')
        .attr('points', data )
        .attr('transform', 'translate(20, 0)')
        .attr('stroke', 'green')
        .style('stroke-width', 3.5)
        .style('stroke-linejoin', 'round')
        .attr('fill', 'none');
};

function clearAll() {
    d3.selectAll('g').remove();
    d3.selectAll('polyline').remove();
}

function clearGraph() {
    d3.selectAll('polyline').remove();
}

let tes = document.createElement('p');
tes.innerText = 'Write new parameters';
document.body.appendChild(tes);

let first = document.createElement('div');
let second = document.createElement('div');

function createOne() {
    // let sup = document.getElementsByClassName('inpParam');
    for( let i = 0; i <= 11; i++ ) {
        let z = document.createElement(`INPUT`);
        z.setAttribute('type','number');
        z.className = 'params';
        z.value = '0';
        // let t = document.createTextNode('0');
        // z.appendChild(t);
        document.body.appendChild(z);
    }
}
createOne();
let zet = document.createElement('p');
zet.innerText = 'Next parameter';
document.body.appendChild(zet);
createOne(second);

// console.log(document.getElementsByTagName('textarea')[0].value);

function createGraph(val){
    clearGraph();
    if(val === '-')
    {
        if (decNumb > 0) {
            decNumb -= 5;
            if (decNumb <= 0){
                alert('Min size for this Graphic');
                decNumb = 15;
            }
        }
    } if (val === '+') {
        decNumb += 5;
        if (decNumb >=30){
            alert('Max size for this Graphic');
            decNumb = 15;
        }
    }
    // let cordinates = createXY(net,cet,decNumb);
    // let cordinates1 = createXY(net1,cet1,decNumb);
    let par = createXY(firstPart,secondPart,decNumb);
    console.log('par',par);

    // myline(cordinates);
    myline(par);
    // myline1(cordinates1);
}
// function for find cursor

// function init() {
//     if (document.layers) document.captureEvents(Event.MOUSEMOVE);
//     document.onmousemove = mousemove;
// }
// function mousemove(event) {
//     let mouse_y;
//     let mouse_x = mouse_y = 0;
//     if (document.attachEvent != null) {
//         mouse_x = window.event.clientX;
//         mouse_y = window.event.clientY;
//     } else if (!document.attachEvent && document.addEventListener) {
//         mouse_x = event.clientX;
//         mouse_y = event.clientY;
//     }
//     status = 'x = ' + mouse_x + ', y = ' + mouse_y;
//     document.getElementById('xy').innerHTML = 'x = ' + mouse_x + ', y = ' + mouse_y;
// }
// init();

// export { myline, myline1 } from 'graph';
