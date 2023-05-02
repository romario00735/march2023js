// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль



// let str1 = 'hello';
// let str2 = 'owu';
// let str3 = 'com';
// let str4 = 'ua';
//
// console.log(str1,str2,str3,str4);
//
// let a = 1;
// console.log(a);
//
// let b = 10;
// console.log(b);
//
// let c = -999;
// console.log(c);
//
// let d =123;
// console.log(d);
//
// let pI= 3.14;
// console.log(pI);
//
// let num = 2.7;
// console.log(num);
//
// let num1 = 16;
// console.log(num1);
//
// let str5 = true;
// console.log (typeof (str5));
//
// let bool = false;
// console.log(bool);

// let firstName = 'Роман';
// console.log(firstName);
//
//
// let middleName = 'Ігорович';
// console.log(middleName);
//
// let lastName = 'Перегонцев';
// console.log(lastName);
//
// let person = lastName + ' ' + firstName +' ' +middleName;
// console.log(person);

// let a = 100;
// console.log(typeof a);
// let b = '100';
// console.log(typeof b)
// let c = true;
// console.log(typeof c)

let name = prompt(`enter tour name`, `ivan`);
console.log(name);
let middleName = prompt();
console.log(middleName);
let age = +prompt(`enter tour age`);
console.log(age);