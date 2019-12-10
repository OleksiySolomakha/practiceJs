let myTask = function (str) {
    str = 'list-style-image';
    console.log(str);
let words = str
    .split('-')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
    document.write(words);
};

const  arr = [3, 4, 5 , 8, 9];
const arr1 = [5, 3, 8, 1];
const arr2 = [5, 2, 1, -10, 8];
const arr3 = ["HTML", "JavaScript", "CSS"];

function filterRanfge( arr, a, b ) {
  let filtered = arr.filter(item => (a <= item && item <= b));
    alert(arr);
    alert(filtered);
};

function filterRangeInPlace( arr1, a, b ) {
    for (let i = 0; i < arr1.length; i++) {
        let val = arr1[i];
        // delete elements
        if (val < a || val > b) {
            arr1.splice(i, 1);
            i--;
        }
        console.log(arr1.length);
        console.log(arr1);
    }
    return arr1;
};

function reverseSort(arr2){
    return arr2.sort((a,b) => b-a);
};

function copySorted(arr3) {
    let ar = arr3.slice();
    return ar.sort((a, b) => a-b);
};

function nameses() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    let users = [ vasya, petya, masha ];
    let names = users.map(item => item.name);
    alert(names);
};

function objectFromName() {
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

      let users = [ vasya, petya, masha ];
    let usersMapped = users.map(user => ({
        fullName : `${user.name} ${user.surname}`,
        id : `${user.id}`}));
    alert( usersMapped[0].id );
    alert( usersMapped[0].fullName );
}

function sortByAge() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    let dasha = { name: "Dasha", age: 29 };

    let  arr = [ vasya, petya, masha, dasha ];

    arr.sort((a, b) => a.age > b.age ? 1 : -1);

    alert(arr[0].name);
    alert(arr[1].name);
    alert(arr[2].name);
    alert(arr[3].name);
}

function shuffle() {
    let arr = [1, 2, 3];

    arr.sort(() => Math.random() - 0.33);
    alert(arr);
}

function getAverageAge() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [ vasya, petya, masha ];

    alert( arr.reduce((a,b) => a + b.age, 0) / arr.length );
}

function unique() {
   let strings = ["кришна", "кришна", "харе", "харе",
       "харе", "харе", "кришна", "кришна", ":-O"
   ];

   for(let str of strings) {
       if (!result.includes(str)){
           result.push(str)
       }
   }
   alert(str);
}



