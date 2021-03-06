'use strict'
console.log('JS-FrontEnd-Udemy-PI');

const myYear = 1981;
let myAge = 41;
console.log(`from ${myYear} is ${myAge}`);


let myName = 'Serhii';
const SuperSvin = true;
const LazySvin = false;
console.log(myName, typeof(myName), SuperSvin, typeof(SuperSvin));
// Serhii string true boolean

let something;
console.log(something);
// undefined

let Zhabka = {
    name: 'Tanusha',
    age: 38,
    isPupsik: true
};
console.log(Zhabka.name, Zhabka.age, Zhabka.isPupsik);
console.log(Zhabka['name'], Zhabka['age'], Zhabka['isPupsik']);
// Tanusha 38 true

const svinFamily = ['Tatko', 'Matushia', 'SynSvin'];
let svinAges = [41, 38, 18];
console.log(svinFamily[2], svinAges[2]);
// SynSvin 18
console.log(svinFamily);
// Array(3) ['Tatko', 'Matushia', 'SynSvin']

Zhabka.height = 175;
Zhabka['from'] = 'Pryluki';
console.log(Zhabka);
// Object {name: 'Tanusha', age: 38, isPupsik: true, height: 175, from: 'Pryluki'}

let SvinFather = {
    name: 'Serhii',
    age: 41,
    isPupsik: false,
    frontEnd: {
        html: true,
        css: true,
        js: true
    },
};
console.log(SvinFather);

/*
alert('this is a command for outputting messages');
const requesto = confirm('here you can ask a question to the user?');
  console.log(requesto, typeof(requesto)); // true/false 'boolean'
const answert = prompt('What is your favorite animal?', '');
  console.log(answert, typeof(answert)); // capibara string or null object 

  const ageQuest = +prompt('How old are you?', '');
  console.log(ageQuest, typeof(ageQuest)); // 41 'number'
*/
const toyCategory = 'bears';
// interpolation
console.log(`https://someurl.com/${toyCategory}/7`);

let incro = 10, decro = 10;
console.log(incro, incro++, incro); // 10 10 11
console.log(decro, decro--, decro); // 10 10 9

let incra = 10, decra = 10;
console.log(incra, ++incra, incra); // 10 11 11
console.log(decra, --decra, decra); // 10 9 9

console.log(8%3); // 2

/*
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
*/
let select = document.querySelector('select');
let para = document.querySelector('#weatherAdvice');
  select.addEventListener('change', setWeather);

function setWeather() {
  let choice = select.value;
  if (choice === 'sunny') {
    para.textContent = 'Wear shorts! Go to the beach or park and buy ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Take a raincoat and an umbrella, and don\'t stay outside for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'It is best to sit with a cup of hot chocolate or make a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'The sky is gray and gloomy; it can change at any moment, so take a raincoat just in case.';
  } else {
    para.textContent = '';
  }
}

// Ternary operator ( condition ) ? run this code : run this code instead
(SvinFather.age === 41) ? console.log('begins a new stage in life') : console.log('you will succeed');

/*
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  default:
    actually, just run this code
}
*/

console.log( NaN || 2 || undefined ); // => 2
console.log( NaN && 2 && undefined ); // => NaN
console.log( 1 && 2 && 3 ); // => 3
console.log( !1 && 2 || !3 ); // => false
console.log( 25 || null && !3 ); // => 25
console.log( NaN || null || !3 || undefined || 5); // => 5
console.log( NaN || null && !3 && undefined || 5); // => 5
console.log( 5 === 5 && 3 > 1 || 5); // => true

console.log(SvinFather.isPupsik); // => false
console.log(!SvinFather.isPupsik); // => true

// examples with cycles
let presentYear = 2022;
while (SvinFather.age <= 43) {
  console.log(`in ${presentYear} you are ${SvinFather.age}`);
  SvinFather.age++;
  presentYear++;
}

for (let workYear = 3; workYear <= 7; workYear++) {
  console.log(`in ${presentYear} you work ${workYear} year, and you are ${SvinFather.age}`);
  SvinFather.age++;
  presentYear++;
}
console.log(presentYear, SvinFather);

// another examples with cycles
for (let i = 0; i < 3; i++){
  console.log(i)
  for (let j = 10; j < 13; j++){
    console.log(j)
  }
}

// star triangle
let starTriangle = '';
const triangleLenth = 7;
for (let i = 0; i < triangleLenth; i++) {
  for (let j = 0; j < triangleLenth - i; j++) {
    starTriangle += ' ';
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    starTriangle += '*';
  }
  starTriangle += '\n';
}
console.log(starTriangle);

//course tasks junior
for (let k = 5; k <= 10; k++) {
  console.log(k);
}

for (let k = 20; k >= 10; k--) {
  if (k === 13) break;
  console.log(k);
}

for (let k = 2; k <= 10; k++) {
  if (k % 2 !== 0) continue;
  console.log(k);
}

let iNum = 2;
while (iNum <=16) {
  if (iNum % 2 !== 0) {
     console.log(iNum);
 }
 iNum++;
}

const arrayOfNumbers = [];
for (let i = 5; i < 11; i++) {
  arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers); // => [5, 6, 7, 8, 9, 10]

//course tasks middle
const arr = [3, 5, 8, 16, 20, 23, 50];
const result1 = [];
  for (let m = 0; m < arr.length; m++) {
    result1[m] = arr[m];
  }
console.log(result1); // => [3, 5, 8, 16, 20, 23, 50]

const data2 = [5, 10, 'Shopping', 20, 'Homework'];
  for (let m = 0; m < data2.length; m++) {
    if (typeof(data2[m]) === 'number') {
      data2[m] = data2[m]* 2;
    } else if (typeof(data2[m]) === 'string') {
      data2[m] = `${data2[m]} - done`;
    }
  }
console.log(data2); // => [10, 20, 'Shopping - done', 40, 'Homework - done']

const data3 = [5, 10, 'Shopping', 20, 'Homework'];
const result3 = [];
for (let r = 1; r <= data3.length; r++) {
  result3[r - 1] = data3[data3.length - r]
}
console.log(result3); // => ['Homework', 20, 'Shopping', 10, 5]

// arrow functions
console.log('functions arrow functions arrow functions')
const simpleCalc = (ax, bx) => ax + bx;
console.log(simpleCalc(17, 24)); // => 41

function convert(amount, curs) {
  console.log(amount * curs);
}
const usdCurs = 28;
const eurCurs = 32;
convert(500, usdCurs); // => 14000
convert(500, eurCurs); // => 16000

//course tasks junior
function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello('Maxin')); // => Hello, Maxin!

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(17)); // => [16, 17, 18]

function getMathResult(num, times) {
  if (typeof(times) !== 'number' || times <= 0) {
      return num;
  }
  let str = '';
  for (let i = 1; i <= times; i++) {
      if (i === times) {
          str += `${num * i}`;
      } else {
          str += `${num * i}---`;  // str = str + num * i + "---"
      }
  }
  return str;
}
console.log(getMathResult(7, 3)); // => 7---14---21
console.log(getMathResult(10, 4)); // => 10---20---30---40

// data type properties
console.dir(Number);
console.dir(String);

  const testString= 'test fruit string';
console.log(testString.toUpperCase()); // => TEST FRUIT STRING
console.log(testString.indexOf('fruit')); // => 5
console.log(testString.slice(5, 10)); // => fruit
console.log(testString.substring(5, 10)); // => fruit
console.log(testString.substr(5, 5)); // => fruit
console.log(testString);

  const testNumber = 17.30;
  const testNumStr = '10.5px';
console.log(Math.round(testNumber)); // => 17
console.log(parseInt(testNumStr)); // => 10
console.log(parseFloat(testNumStr)); // => 10.5

//course tasks middle
function calculateVolumeAndArea(length) {
  if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
      return "An error occurred while calculating";
  }
  let volume = 0,
      area = 0; 
  volume = length * length * length;
  area = 6 * (length * length);
  return `Cube volume: ${volume}, total surface area: ${area}`;
}
console.log(calculateVolumeAndArea(5));  // => Cube volume: 125, total surface area: 150
console.log(calculateVolumeAndArea('7'));  // => An error occurred while calculating

function getCoupeNumber(seatNumber) {
  if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
      return "Error. Check if the seat number entered is correct";
  }
  if (seatNumber === 0 || seatNumber > 36) {
      return "There are no such places in the car";
  }
  for (let i = 4; i <= 36; i = i + 4) {
      if (seatNumber <= i) {
          return Math.ceil(i / 4);
      }
  }
}
console.log(getCoupeNumber(33));  // => 9
console.log(getCoupeNumber(17));  // => 5
console.log(getCoupeNumber('Bib'));  // => Error. Check if the seat number entered is correct

// course tasks senior
function getTimeFromMinutes(minutesTotal) {
  if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) { //The value to test for integer.
      return "Error, check data";
  }
  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;
  let hoursStr = '';
  switch (hours) {
      case 0: 
          hoursStr = 'hours';
          break;
      case 1:
          hoursStr = 'hour';
          break;
      case 2:
      case 3:
      case 4:
          hoursStr = 'hours';
          break;
      default:
          hoursStr = 'hours';
  }
  return `This is ${hours} ${hoursStr} ?? ${minutes} minit`;
}
console.log(getTimeFromMinutes(160));  // => This is 2 hours ?? 40 minit
console.log(getTimeFromMinutes(110));  // => This is 1 hour ?? 50 minit

function findMaxNumber(a, b ,c, d) {
  if (typeof(a) !== 'number' ||
      typeof(b) !== 'number' ||
      typeof(c) !== 'number' ||
      typeof(d) !== 'number') {
      return 0;
  } else {
      return Math.max(a, b ,c, d);
  }
}
console.log(findMaxNumber(1, 5, 6.6, 10.5));  // => 10.5
console.log(findMaxNumber(1, 5, '6', '10'));  // => 0

// Write a function fib(n) that returns the nth Fibonacci number.
function fib(num) {
  if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
      return "";
  }
  let result = '';
  let first = 0;
  let second = 1;
  for (let i = 0; i < num; i++) {
      if (i + 1 === num) {
        result += `${first}`; // No space at the end
      } else {
        result += `${first} `;
      }
      let third = first + second;
      first = second;
      second = third;
  }
  return result;
}
console.log(fib(7));  // => 0 1 1 2 3 5 8

// method removes whitespace characters from the beginning and end of a string.
console.log('String.prototype.trim()');

// This writing is called asynchronous programming using callbacks.
function learnJS(lang, callback) {
  console.log(`I learn: ${lang}.`);
  callback();
}
learnJS('Java Script', function(){
  console.log('It is interesting!');
});

// iterating over object properties
const testOptions = {
  name: 'test',
  width: 1024,
  height: 924,
  superfluous: 'not needed',
  colors: {
    border: 'black',
    bg: 'red'
  }
};
console.log(testOptions.height);  // => 924
console.log(testOptions['colors']);  // => {border: 'black', bg: 'red'}
  delete testOptions.superfluous;
console.log(testOptions);  // => {name: 'test', width: 1024, height: 924, colors: {???}}  

let keyCounter = 0;
for (let key in testOptions) {
  if (typeof(testOptions[key]) === 'object') {
    for (let ink in testOptions[key]) {
      console.log(`Property ${ink} equal ${testOptions[key][ink]}`);
      keyCounter++;
    }
  } else {
    console.log(`Property ${key} equal ${testOptions[key]}`);
    keyCounter++;
  }
}
console.log(keyCounter);  // => 5
console.log(Object.keys(testOptions).length);  // => 4

testOptions['makeTest'] = function() {
  console.log('inside test');
}
console.log(testOptions); // => {name: 'test', width: 1024, height: 924, colors: {???}, makeTest: ??}
console.log(testOptions.makeTest()); // => inside test

// Destructuring allows you to break an object or array into variables upon assignment.
console.log('Destructuring an object');
  const {border, bg} = testOptions['colors'];
console.log(border, bg); // => black red

// about array methods
console.dir(Array);
 const testArray = [1, 2, 3, 6, 8];
console.log(testArray); // => [1, 2, 3, 6, 8]
  testArray.pop(); 
console.log(testArray); // => [1, 2, 3, 6]
  testArray.push(9, 10);
console.log(testArray); // => [1, 2, 3, 6, 9, 10]
// shift & unshift use rarely
  for (let value of testArray) {
    console.log(`elem ${value}`);
  }; // will print the value of each element of the array
console.log(testArray.length);  // => 6

testArray.forEach(function(item, no, testArray){
  console.log(`item ${no}: ${item} inside ${testArray}`)
}); // => ... item 5: 10 inside 1,2,3,6,9,10

  const testStringo = 'HTML, CSS, JavaScript, SCSS, SQL';
  const knowledge = testStringo.split(', ');
console.log(knowledge); // => ['HTML', 'CSS', 'JavaScript', 'SCSS', 'SQL']
  const testoString = knowledge.join(' & ');
console.log(testoString); // => HTML & CSS & JavaScript & SCSS & SQL
console.log(knowledge.sort()); // => ['CSS', 'HTML', 'JavaScript', 'SCSS', 'SQL']

// some way of sorting
const testoArray = [11, 7, 24, 3, 46, 28];
  console.log(testoArray);
function compareNum (a, b) {
  return a - b;
}
testoArray.sort(compareNum);
  console.log(testoArray); // => [3, 7, 11, 24, 28, 46]

// simple copying of objects
console.log(Zhabka); // => {name: 'Tanusha', age: 38, isPupsik: true, height: 175, from: 'Pryluki'}
  function copyObject(mainObj) {
    let objCopy = {};
    let key;
      for (key in mainObj) {
        objCopy[key] = mainObj[key];
      }
      return objCopy;
  }
const clonZhabka = copyObject(Zhabka);
clonZhabka['age'] = 1;
clonZhabka['from'] = 'California';
console.log(clonZhabka); // => {name: 'Tanusha', age: 1, isPupsik: true, height: 175, from: 'California'}

console.log(SvinFather); // => {name: 'Serhii', age: 49, isPupsik: false, frontEnd: {???}}

const SvinSon = {
  name: 'Max',
  age: 18
};
console.log(SvinSon);  // => {name: 'Max', age: 18}
const addPupsik = {
  isPupsik: true,
  fromSvinFamily: true
};
console.log(addPupsik); // => {isPupsik: true, fromSvinFamily: true}
Object.assign(SvinSon, addPupsik); 
console.log(SvinSon); // => {name: 'Max', age: 18, isPupsik: true, fromSvinFamily: true}

const clonPupsik = Object.assign({}, addPupsik);
console.log(clonPupsik); // => {isPupsik: true, fromSvinFamily: true}
clonPupsik['fromSvinFamily'] = false;
console.log(addPupsik); // => {isPupsik: true, fromSvinFamily: true}
console.log(clonPupsik); // => {isPupsik: true, fromSvinFamily: false}

// simple copying of arrays
console.log(svinFamily); // => ['Tatko', 'Matushia', 'SynSvin']
const clonFamily = svinFamily.slice();
clonFamily[3] = 'Pesyk';
console.log(clonFamily); // => ['Tatko', 'Matushia', 'SynSvin', 'Pesyk']

// ES6 & ES8 copy methods
const videoHost = ['NetFlix', 'YouTube', 'Vimeo'];
const blogsHost = ['wordpress', 'LiveJournal', 'blogger'];
const interHosts = [...videoHost, ...blogsHost, 'FaseBook'];
console.log(interHosts) // => ['NetFlix', 'YouTube', 'Vimeo', 'wordpress', 'LiveJournal', 'blogger', 'FaseBook']

const newClonFamily = [...svinFamily];
console.log(newClonFamily) // => ['Tatko', 'Matushia', 'SynSvin']

const newClonPupsik = {...addPupsik};
console.log(newClonPupsik) // => {isPupsik: true, fromSvinFamily: true}

//course tasks junior
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ua', 'eng'],
      programmingLangs: {
          js: '50%',
          php: '5%'
      },
      exp: '3 month'
  },
  showAgeAndLangs: function(plan) {
      const {age} = plan;
      const {languages} = plan.skills;
      let str = `I am ${age} old and I know: `;
      languages.forEach(function(lang) {
          str += `${lang.toUpperCase()} `;
      });
      return str;
  }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
  const {exp} = plan.skills;
  return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
  let str = '';
  const {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
      str += `Language ${key} learned on ${programmingLangs[key]}\n`
  }
  return str;
}
console.log(showProgrammingLangs(personalPlanPeter));

//course tasks junior
function showFamily(arr) {
  let str = '';
  arr.length === 0 ? str = 'The family is empty' : str = 'Family consists of: ';
  arr.forEach(member => {
    str += `${member}, `
  });
  return str;
}
console.log(showFamily(svinFamily)); // => Family consists of: Tatko, Matushia, SynSvin, 

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
  arr.forEach(city => {
    console.log(city.toLowerCase())
  })
}
console.log(standardizeStrings(favoriteCities));

//course tasks middle
const someString = 'This is some strange string';
function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Error!";
    }
    // The most optimal solution
    return str.split('').reverse().join('');
    // Loop solution
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}
console.log(reverse(someString)); // => gnirts egnarts emos si sihT

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'No currencies available' : str = 'Available currencies:\n';
    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }
    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')); // => 

// begin with OOP
const soldier = {
  health: 400,
  armor: 100,
  weapon: 'rifle'
}
const soldierJohn = {
  health: 210
}
// the old way of using prototype properties
soldierJohn.__proto__ = soldier;
console.log(soldierJohn); // => {health: 210}
console.log(soldierJohn.armor); // => 100

// object new prototype
const soldierRufus = {
  health: 260
}
Object.setPrototypeOf(soldierRufus, soldier);
console.log(soldierRufus.weapon); // => rifle

const soldierJenifer = Object.create(soldier);

//course tasks middle
const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;
  data.shops.forEach(shop => {
      square += shop.width * shop.length;
  });
  volume = data.height * square;
  if (data.budget - (volume * data.moneyPer1m3) >= 0) {
      return 'Enough budget';
  } else {
      return 'Budget is not enough';
  }
}
console.log(isBudgetEnough(shoppingMallData)); // => Budget is not enough

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a, b, c, `Remaining students: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}
console.log(sortStudentsByGroups(students));


// closures
function createCounter() {
  let counter = 0;
  const myInCount = function() {
    counter = counter + 1;
    return counter;
  }
  return myInCount;
}
const increment = createCounter();
const c1 = increment(); 
const c2 = increment(); 
const c3 = increment();
console.log('example increment', c1, c2, c3) // => example increment 1 2 3

// intervue questions
console.log('### intervue questions ###')
let xy = 5; console.log( xy++ );  // => 5
console.log( [ ] + false - null + true );  // => NaN
let yy = 1; let xx = yy = 2; console.log( xx );  // => 2
console.log( [ ] + 1 + 2 );  // => 12
console.log( null || 2 && 3 || 4 );  // => 3







