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

function createXY(arr1,arr2,decNumb) {

    console.log('arr1',arr1);
    console.log('++++++++++++++');
    console.log('arr2',arr2);
    let c = [];
    for (let i = 0; i < arr1.length && arr2.length; i++) {
            let ob = {};
            ob.x = arr1[i] * decNumb;
            ob.y = arr2[i] * decNumb;
            c.push(ob);
        }
    console.log('c', c);
    return c;
}

let width = 400,
    height = 400;

let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height",height);

let bod =svg.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",width)
    .attr("height",height)
    .attr("fill", "aqua");

// Create scale X
let scale = d3.scaleLinear()
    .domain([0, d3.max(net)])
    .range([0, 380]);

// Add scales to axis
let x_axis = d3.axisBottom()
    .scale(scale);

//Append group and insert axis

let xAxisTranslate = height - 20;

svg.append("g")
    .attr("transform", "translate(5, " + xAxisTranslate  +")")
    .call(x_axis);

// Create scale Y
let scaleY = d3.scaleLinear()
    .domain([0, d3.max(cet)])
    .range([380, 0]);

// Add scales to axis
let y_axis = d3.axisRight()
    .scale(scaleY);

// Append group and insert axis
svg.append("g")
    .attr("transform", "translate(5, 10)")
    .call(y_axis);

let lineFunc = d3.line()
    .x(function(d) { return d.x })
    .y(function(d) { return d.y });

dates = [50,375,
    150,375 ,150,325, 250,325, 250,375];

// Create lines
let myline =  function (){
    svg.append("polyline")
    .attr("points",dates)
    .attr('stroke', 'yellow')
    .style("stroke-width", 5)
        .attr('fill',"none");
};

let myline1 =  function (data){
    svg.append("path")
        .attr('d', lineFunc(data))
        .attr('stroke', 'silver')
        .style("stroke-width", 2.5)
        .style("stroke-linejoin", "round")
        .attr('fill', 'none');
};

function clearGraph() {
    d3.selectAll('polyline').remove();
    // let s = d3.select("path");
    // s.selectAll("*").remove();
}

function justTest (val) {
    clearGraph();
    if(val === '-')
    {

        if (decNumb > 0) {
            decNumb -= 10;
        }
    } else {
        decNumb += 10;
    }

    let cordinates = createXY(net,cet,decNumb);
    let cordinates1 = createXY(net1,cet1,decNumb);

    myline(cordinates);
    myline1(cordinates1);
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
//     status = "x = " + mouse_x + ", y = " + mouse_y;
//     document.getElementById('xy').innerHTML = "x = " + mouse_x + ", y = " + mouse_y;
// }
// init();
