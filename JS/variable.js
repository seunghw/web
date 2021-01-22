/*
1. prolog

// whle-scriplt strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5

'use strict'; //필수 


console.log('hello world');

let a;
a = 6;

*/

// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
// mutable
// let (added in ES6) 자바스크립트에서 변수를 선언할 수 있는 키워드는 이거 하나뿐.
let globalName = 'golobal name'; // 이부분은 최소한만.

{ // block 안에서 정의하면 이 밖에서는 사용되지 않음
    let name = 'seung';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (dont't ever use this!)
// var hoisting (move declaration from bottom to top) 선언을 제일 위로 끌어올려주는 것.
age = 4;
var age;

// 3. Constant, rrw(read only)
// use const whenver possible.
// only use let if variable needs to change.


// favor immutable data type always for a few reasons: 선언하면 고정
// - security
// - thread safety
// - reduec human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// NOte!
// Immutabel data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons: 선언하면 고정
// - security
// - thread safety
// - reduec human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${count}, type: ${typeof size}`);


// number - speicla numeric values:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) 자주 사용함
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
 // .description 붙여서 string을 만들어야 에러가 안남.


// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// 이 부분때문에 runtime error가 잘 일어남

let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));