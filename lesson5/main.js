//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let Sprym = (a, b) => a * b;
console.log(Sprym(10, 20))


//- створити функцію яка обчислює та повертає площу кола з радіусом r
let Skola = (r) => Math.PI * r * r;
console.log(Skola(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCilindr = (r, h) => 2 * 3.14 * r * h;
console.log(sCilindr(5,10));

//- створити функцію яка приймає масив та виводить кожен його елемент

let  giveArray1 = [1,2,3, 'Andriy', 'Savchuk'];
let itemArray =  (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
itemArray( giveArray1);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let creatP =  (text) => {
    document.write(`<p>${text}</p>`);
}
creatP('Andriy');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (arg) => {
    document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`);
}
createUl('Item');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUl2 = (text, size) => {
    document.write(`<ul>`)
    for (let i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
createUl2('hello', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let  giveArray2 = ['Andriy Savchuk', 1999, 'hello', false];
let itemArray2 = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`)
}
itemArray2(giveArray2);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let giveArrayObject =
    [{id: 1, name: 'Andriy', age: 22},
    {id: 2, name: 'Yaryna', age: 20},
    {id: 3, name: 'Kasper', age: 5}];
let objectArray = (array) => {
    for (const item of array) {
        document.write(`<div>${item.id}.${item.name} - ${item.age}</div>`);
    }
}
objectArray(giveArrayObject);

//- створити функцію яка повертає найменьше число з масиву
let minArray = [10,30,2,750,1,60,400,7,50000];
let arrayMin = (array) => {
    let min = array[0];
    for (const number of array) {
        if(number > min){
            min = number;
        }
    }
    return min;
}
console.log(`Найменше число з масиву: ${arrayMin(minArray)}`)

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArray = [1,3,6,10];
let sumElement =  (array) => {
    let sum = 0;
    for (const arrayElement of array) {
        sum = arrayElement + sum;
    }
    return sum;
}
console.log(sumElement(sumArray));
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    const num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 2));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}

const currencies = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
];

console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));