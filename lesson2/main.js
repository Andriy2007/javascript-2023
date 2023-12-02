//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 4, 15, 'qwe', 'asd', 'zxc', true, false, [] ]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookOne = {
    title: 'qwe',
    pageCount: 200,
    genre: 'fantasy'
}
console.log(bookOne)

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bookTwo = {
    title: 'qwe',
    pageCount: 200,
    genre: 'fantasy',
    authors: [
        authorsOne = {
        name: 'Stiven',
            age: 45
        },
        authorsTwo = {
            name: 'Artur',
            age: 45
        }
    ]
}
console.log(bookTwo)

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name:'Andriy', username:'Savchuk', password:12345},
    {name:'Yaryna', username:'Sava', password:'qwert'},
    {name:'Stefania', username:'Petrenko', password:8093},
    {name:'Oleg', username:'Boroda', password:'asdg'},
    {name:'Igor', username:'Sak', password:5792},
    {name:'Yura', username:'Pavluk', password:'xcbvch'}
]
console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)

//Логічні розгалуження:
 //   - Є змінна х, якій ви надаєте довільне числове значення.
 //   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1
//let a = 0
//let a = -3
let x = a;
if (x !== 0) {
    console.log('ВІрно');
} else {
    console.log('Невірно')
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = 40;
if (time >= 0 && time <= 14) {
    console.log('В першу частину.');
}
if (time >= 15 && time <= 30) {
    console.log('В другу частину.');
}
if (time >= 31 && time <= 45) {
    console.log('В третю частину.');
}
if (time >= 46 && time <= 59) {
    console.log('В четверту частину.');
}


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;
if (day >= 1 && day <= 10) {
    console.log('У першу половину.');
}
if (day >= 11 && day <= 20) {
    console.log('У другу половину.');
}
if (day >= 21 && day <= 31) {
    console.log('У третю половину.');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).
let dayy = 5
switch (dayy) {
    case 1:
        console.log('reading');
        break;
    case 2:
        console.log('running');
        break;
    case 3:
        console.log('watchingTv');
        break;
    case 4:
        console.log('swimming');
        break;
    case 5:
        console.log('relax');
        break;
    case 6:
        console.log('sport');
        break;
    case 7:
        console.log('walking');
        break;
}


//    - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
 //       Також потрібно врахувати коли введені рівні числа.
let q = prompt('first');
let b = prompt('second');
if (q > b) {
    console.log(q);
}
if (q < b) {
    console.log(b)
}
if (q === b) {
    console.log('Числа рівні')
}

//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 //       за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//       (хибноподібні, тобто приводиться до false)
let x1 = true
x1 = x1 || 'default';
console.log(x1);

 //   - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
//   на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let array = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(array[0].monthDuration >= 5)
{console.log('Супер')}
if(array[1].monthDuration >= 5)
{console.log('Супер')}
if(array[2].monthDuration >= 5)
{console.log('Супер')}
if(array[3].monthDuration >= 5)
{console.log('Супер')}
if(array[4].monthDuration >= 5)
{console.log('Супер')}
if(array[5].monthDuration >= 5)
{console.log('Супер')}
else{
    console.log('false')
}