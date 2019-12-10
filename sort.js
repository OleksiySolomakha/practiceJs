// let arr = [8, 1, 4, 5, 7, 2, 3, 6];
let arr = [8, 1, 4, 0, 7];

const sort = arr.forEach(function(item, index, arr) {
    for (let b = arr.length-1; b >= 0; --b) {
        if(arr[b-1] >= arr[b]){
            let t = arr[b-1];
            arr[b-1] = arr[b];
            arr[b] = t;
        }
    }
    document.write(`Изменения в масиве: ${arr}<br>`);
});
let t0 = performance.now();

const shake = arr.forEach(function(item, index, arr) {
    let size = arr.length;
    let swap = false;
    for (let k = size-1; k > 0; k--){
        swap = false;
        for (let i = k; i > size - 1 - k; i--){
            if (arr[i] < arr[i - 1]){
                console.log(arr);
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i -1] = temp;
                swap = true;
            }
        }

        for (let i = size - k; i < k; i++){
            if (arr[i] > arr[i + 1]) {
                console.log('=============' + arr);
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
        if (!swap){
            break;
        }
        console.log('************' + arr);
    }
    document.write(`Изменения в масиве: ${arr} Шейкерная сортировка <br>`);
});
let t1 = performance.now();
document.write("Call to doSomething took " + (t1 - t0) + " milliseconds.");
