/*// Array Destructuring
document.querySelector('Array Destructuring')
const arry=['one','two','three','four'];
const [x,...rest] = arry;

// Data Types

let num = 212,
string = "Hello world",
bool = true,
boolF = false,
unD,
nu = null,
big = BigInt;

console.log(num, typeof num);
console.log(string, typeof string);
console.log(bool, typeof bool);
console.log(boolF, typeof boolF);
console.log(unD, typeof unD);
console.log(nu, typeof nu);
console.log(big, typeof big);


const age = 2022 - 1993;
console.log(age);
*/

// const, let, and var

/*
const marksHeight = 1.69;
const marksWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92

const BMIf = marksWeight / marksHeight ** 2;
const BMI = johnWeight / (johnHeight * johnHeight);

console.log(BMIf);
console.log(BMI);

if(BMIf > BMI){
    console.log(true);
}
*/


// String
/*
const firstName = "Rajinder";
const lastName = "Saini";

const stringOut = "I'm " + firstName + " " + lastName ;

console.log(stringOut);

const newOut = `I'm ${firstName} ${lastName}`;

console.log(newOut);

console.log('new data type \n\
this is new data \n\
new data')

console.log(
`new data first line
second line data
last data line`
)*/


// if else Statement
/*
const age = 24;

// const outAge = age >= 23;

// if(outAge){
//     console.log("Old enough to drike");
// }

if(age >= 25){
    console.log("Old enough to drive a car");
}
else{
    console.log("Grow Up first then drive a car");
}*/


// Block level variables
/*const presentYear = 2022;
let year;
if(presentYear <= 2023){
    year = 22;
}
else{
    year = 2022
}

console.log(year)*/


// Types conversion of Data
/*
const pastYear = "1992";

console.log(Number(pastYear), pastYear);
console.log(Number(pastYear) + 10);

console.log(Number("string"));
console.log(typeof NaN);

console.log(String(12),23);


// Type coercion 

console.log('I am '+ 29 + ' years old');
console.log('I am '+'29'+' years old')
console.log('23'- '3' - 10); 
console.log('23'+ '3' + 10); 
console.log('22' * 2); 
console.log('22' * '2'); 
console.log('23' / '2'); 
*/

// Boolean
// 5 falsy value: 0, '', undefined, null, NaN;
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean('name'));
console.log(Boolean({}));

const money = 0;
console.log(Boolean(money));

if(money){
    console.log('if part');
}
else{
    console.log('else');
}

let newVar;
console.log(Boolean(newVar));

if(newVar){
    console.log('if part');
}
else{
    console.log('else');
}*/

// Equal Operator
// Strict Equality Operator
/*const age = 20;
const upAge = '15';
if(age === 20) console.log("It's true");
if(upAge == 15) console.log("It's true (loose operator)");

// const enterNum = Number(prompt("Enter the number"));
// console.log(enterNum);

if(age !== 19) console.log("if block");*/

// Logical opreators
/*const has = true;
const vision = true;

console.log(has && vision);
console.log(!has && vision);
console.log(has && !vision);
console.log(!has && !vision);
console.log(has || vision);
console.log(has || !vision);
console.log(!has || !vision);

const newConst = has && vision;

if(newConst) console.log('If statement is true');
else console.log("else statement is true");
*/


// Switch Statements
/*
const day = 'friday';

switch(day){
    case 'monday': //day === 'monday'
        console.log('Week first day');
        break;
    case 'tuesday':
        console.log('Week 2nd day');
        break;
    case 'wednesday':
        console.log('Week 3rd day');
        break;
    case 'thursday':
        console.log('week forth day');
        break;
    case 'friday':
        console.log('Week 5th day');
        break;
    case 'saturday':
        console.log('Week 6th day');
        break;
    case 'sunday':
        console.log('weekend')
        break;
}*/


// conditonal Ternary operator
/*
const myage = 29;

myage >= 20 ? console.log('Your Age is above 20') : '';

myage <= 20 ? console.log('Your age is above 20') : console.log('Your age is less than 30')
*/


// coding challenge
/*
let tip;
let bill = 40;

if (bill <= 300 && bill >= 50) {
    console.log(tip = bill * 15 / 100, bill = bill + tip);
}

else if (bill < 50) {
    tip = 0;
    console.log(tip, bill);
}

else {
    console.log(tip = bill * 20 / 100, bill = bill + tip);
}

let bill1 = 40;

bill1 <= 300 && bill1 >= 50 ? console.log(tip = bill1 * 15 / 100, bill1 = bill1 + tip) : (bill1 < 50) ? console.log(tip = 0, bill1) : console.log(tip = bill1 * 20 / 100, bill1 = bill1 + tip);

let newTip = 0,
    newBill = 40;
switch (true) {
    case newBill <= 300 && newBill >= 50:
        newTip = newBill * 15 / 100;
        newBill = newBill + newTip;
        console.log(newTip, newBill);
        break;
    case newBill >= 300:
        newTip = newBill * 20 / 100;
        newBill = newBill + newTip;
        console.log(newTip, newBill);
        break;
    case newBill <= 50:
        newTip = 0;
        console.log(newTip, newBill);
        break;
    default:
        console.log(newTip, newBill);
}
*/