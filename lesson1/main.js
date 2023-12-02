//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log

let hello = 'hello'
console.log(hello)
let owu = 'owu'
console.log(owu)
let com = 'com'
console.log(com)
let q = 1
console.log(q)
let w = 10
console.log(w)
let e = 999
console.log(e)
let r = 123
console.log(r)
let t = 3.14
console.log(t)
let y = 2.7
console.log(y)
let u = 16
console.log(u)
let i = true
console.log(i)
let o = false
console.log(o)

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//let firstName = "Andriy";
//let middleName = "Savchuk";
//let lastName = "Olexsandrovuch";
//let person = firstName + ' ' + middleName + ' ' + lastName;
//console.log(person);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a)
let b = '100';
console.log(typeof b)
let c = true;
console.log(typeof c)

//Додаткове для тих хто цікавився prompt`oм
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName = prompt("Your name:");
let middleName = prompt("Your middle name:");
let age = prompt("Your age:");
console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);