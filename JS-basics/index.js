// First JS Code

// -------------------------------------------------------- //

let name = 'Gary'; 
// 1. Cannot be a reserved keyword 
// 2. Should be meaningful
// 3. Cannot start with a number
// 4. Cannot contain a space or hyphten (-)
console.log(name);

// -------------------------------------------------------- //

let firstName, lastName;

let FirstName; // 命名的格式要固定，這很重要。

const interestRate = 0.3; 
// interestRate = 1; 
// const 格式的變數是不可以改變的，如果真的要做改變的話，可以用`let`來做宣告

console.log(interestRate)

// -------------------------------------------------------- //

// JS 中的資料型態大致上可以分兩類 
// [ Premitive/ Value types ] / [ Reference Types ]
// Premitive Types 中包含 : String、Number、Boolean、undefined、null

let name = 'Gary'; 
typeof name; // String Literal

let age = 30; 
typeof age; // Number Literal
let isApproved = true; 

typeof isApproved; //Boolean Literal 
let firstName = undefined; 

typeof firstName; // undefined
let selectedColor = null; //假設我們今天要商品做一個顏色選取，這會在後來選取之後被定義為那個顏色

// -------------------------------------------------------- //

// JS 的 Dynamic
let name = 'Gary';
typeof name; // string
name = 1;
typeof name; // number

// Reference Types 中包含 : Object、Array、Function
let name = 'Gary';
let age = 23; 

let person = {
    name: 'Gary',
    age: 23
};

// 如果要更動某個參數的數值，要如何做到呢?

// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Eddie';
person[selection] = 'Mary';

console.log(person.name);

// -------------------------------------------------------- //

// Arrays
let selectedColors = ['red', 'blue'];

selectedColors[2] = 'green';  //這邊也可以宣告他是 selectedColors[2] =1

console.log(selectedColors.length); 

// -------------------------------------------------------- //

// Functions Performing a task
function greet(firstName, lastName){
    console.log('Hello ' + firstName + ' ' + lastName)
}

greet('Rick', 'Roll');
greet('Monday', '88');

// 小筆記 
// parameter 是 function 中傳送的值 ex. name
// argument 是 實際傳入的一個值 ex. 'Rick Roll'

// -------------------------------------------------------- //

// Functions Calculating

function square(number){
    return number*number;
}

console.log(square(87));

// 在這邊介紹我們的JS，可以用來做運算，回傳值。

// -------------------------------------------------------- //