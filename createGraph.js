

function getParameter(){
    for(let i =0; i <= 11; i++ ) {
        // document.getElementsByTagName('INPUT')[i].value = `${i}`;
        let v = document.getElementsByTagName('INPUT')[i].value;
        console.log('i',i);
        if(v >= 21 ){
            v = 20;
            console.log('parameters from input param 1', v);
            firstPart.push(v);
        } else if(v < 0){
            v = 0;
            console.log('parameters from input param 1', v);
            firstPart.push(v);
        } else {
            console.log('parameters from input param 1', v);
            firstPart.push(v);
        }
    }
    console.log('firstPart',firstPart);
    //    SECOND PARAMETERS
    for(let y = 12; y < 24; y++ ) {
        // document.getElementsByTagName('INPUT')[y].value = `${y}`;
        let x = document.getElementsByTagName('INPUT')[y].value;
        console.log('y',y);
        if(x >= 21 ){
            x = 20;
            console.log('parameters from input param 2', x);
            secondPart.push(x);
        } else if(x < 0){
            x = 0;
            console.log('parameters from input param 2', x);
            secondPart.push(x);
        } else {
            console.log('parameters from input param 2', x);
            secondPart.push(x);
        }
    }

    // for (let i = 0; i <= 24; i++){
    //     // document.getElementsByTagName('textarea')[i].value = `${i}`;
    //     if (i<=12){
    //         i++;
    //         let v = document.getElementsByTagName('textarea')[i].value;
    //             console.log('i',i);
    //             console.log('parameters from input param 1', v);
    //             firstPart.push(v);
    //     }
    //     if (i < 24){
    //         i++;
    //             let x = document.getElementsByTagName('textarea')[i].value;
    //             console.log('y',i);
    //             console.log('parameters from input param 2', x);
    //             secondPart.push(x);
    //     }
    // }

    console.log('secondPart',secondPart);

    let job = [];

    for(let o = 0; o < firstPart.length && secondPart.length; o++) {
        let jj = [];
        jj[0] = firstPart[o] * decNumb;
        console.log('jj[0]', jj[0]);
        jj[1] = secondPart[o] * decNumb;
        console.log('jj[1]', jj[1]);
        job.push(jj);
    }
    console.log('job',job);
    // return job;
    let par = createXY(firstPart,secondPart,decNumb);
    console.log('par',par);

    // myline(cordinates);
    myline(par);
}
