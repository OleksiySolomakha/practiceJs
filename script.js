const myFunction = function () {

    let mas = ['i', 'we', 55, 'dolce', 'go TO scHool'];
    //SPLICE
    //swap element
    // mas.splice(0, 3, 'Girl', 'with');
    // let removed = mas.splice(0,2);
    // alert(removed, ' - delete from "mas"!');
    // mas.splice(-2,0,'Do, ', 'nothing');
    // SLICE
    // alert(mas.slice(1, -1));
    //CONCAT
    // let arr1 = [1,2];
    // let arr2 = ['Apple', 'Pen'];
    // let arr = [];
    // let arrayLike = {
    //     0: "something",
    //     1: "like",
    //     [Symbol.isConcatSpreadable]: true,
    //     length: 2
    // };
    // alert(arr.concat(arr1,arr2,arrayLike));
    //FOREACH
    // mas.forEach((item) => { alert(`${item} : nice`)});
    //FIND IN MASSIVE
    // alert(mas.indexOf(55));
    // alert(mas.indexOf('we'));
    // alert(mas.indexOf('go To'));
    // alert(mas.lastIndexOf('dolce'));
    // alert(mas.lastIndexOf('go To'));
    //FIND and FILTER
    // let animal = [
    //     {
    //         name : 'monkey',
    //         index: 1
    //     },
    //     {
    //         name: 'hippo',
    //         index: 2
    //     },
    //     {
    //         name : 'lion',
    //         index: 3
    //     },
    //     {
    //         name : 'zebra',
    //         index: 4
    //     }
    // ];
    // // let ping = animal.findIndex(item => item.index === 4 );
    // let ping = animal.filter(item => item.name === 'lion');
    //MAP
    // let p = mas.map(item => item.length);
    //Sort
    // let p = [1, -2, 15, 2, 0, 8].sort(function(a, b) {
    //     alert( a + " <> " + b );
    // });
    //REVERSE
    // let p = mas.reverse();
    //SPLIT JOIN
    // let  basket = ['chicago', 'rockets', 'hit', 'dalace'];
    // let  basket = 'chicago';
    // let p = basket.split(', ', 1);
    // let p = basket.split('');
    // let p = basket.join('****');
    // alert(p);
    // for (let bask of p ){
    // alert(`Let ${bask} win NBA !!!`);}
    let arr = [ 3, 4, 5];
    let result = arr.reduce((sum, current) => sum + current, 50);
    alert(result);

    document.write('Now "mas" is : ', mas);
};
