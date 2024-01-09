// //bai1,2 console.log, cmt
// // Log number
// console.log(100);

// // Log string
// console.log('Hello World');

// // Log multiple values
// console.log(20, 'Hello', true);

// // Log a variable
// const x = 100;
// console.log(x);

//bai3 khai bao biến
// Ways to declare a variable
// `var`, `let`, & `const`

// let firstName = 'John';
// const lastName = 'Doe';
// let age = 30;

// console.log(firstName,age, "tuổi");

// // With let, we can declare a value without assigning a value
// let score;
// score = 1;
// console.log(score);

// if (true) {
//   score = score + 1;
// }

// console.log(score);

// const x = 100;

// // We can still manipulate arrays and objects using const
// const arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);

// const person = {
//   name: 'Brad',
// };
// person.name = 'John';
// person.email = 'brad@gmail.com';
// console.log(person);

//bai4 kiểu dữ liệu
// // String
// const firstName = 'Sara';

// // Number
// const age = 30;
// const temp = 98.9;

// // Boolean
// const hasKids = true;

// // Null
// const aptNumber = null;

// // Undefined
// // let score;
// const score = undefined;

// // Symbol
// const id = Symbol('id');

// // BigInt
// const n = 9007199254740991n;

// // Reference Types

// const numbers = [1, 2, 3, 4];

// const person = {
//   name: 'Brad',
// };

// function sayHello() {
//   console.log('Hello');
// }

// const output = sayHello;

// console.log(output, typeof output);

// //bài5 : bộ nhớ stack-heap

// const name = 'John';
// const age = 30;

// const person = {
//   name: 'Brad',
//   age: 40,
// };

// let newName = name;
// newName = 'Jonathan';

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(name, newName); // John, Jonathan
// console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }

//bài 6:type-conversion (chuyển đổi dữ liệu)
// let amount = 'hello';

// //string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// // number to string
// amount = amount.toString();
// amount = String(amount);

// // Convert string to decimal
// amount = parseFloat(amount);

// // Convert number to boolean
// amount = Boolean(amount);

// // Ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);

// console.log(amount, typeof amount);

//bài 7: toán tử operators
// 1. Arithmetic Operators

// let x;

// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 7 % 5;

// // Concatenation
// x = 'Hello' + ' ' + 'World';

// // Exponent
// x = 2 ** 3;

// // Increment
// x = 1;
// // x = x + 1;
// x++;

// // Decrement
// // x = x - 1;
// x--;

// // 2. Assignment Operators

// x = 10;

// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x %= 5;
// x **= 5;

// // 3. Comparison Operators

// // Equal to (Just the value, not the type)
// x = 2 == '2';

// // Equal to (Type and value)
// x = 2 === '2';

// // Not equal to (Just the value, not the type)
// x = 2 != '2';

// // Not equal to (Type and value)
// x = 2 !== 2;

// // Greater than and less than
// x = 10 > 5;
// x = 10 < 5;
// x = 10 <= 5;
// x = 10 >= 5;

// console.log(x);

//bài 8: đổi kiểu dữ liệu type-coercion
// let x;

// // Coerced to a string
// x = 5 + '5';

// x = 5 + Number('5');

// // Coerced to a number
// x = 5 * '5';

// // null is coerced to 0 as it is a `falsy` value
// x = 5 + null;

// x = Number(null);

// x = Number(true);
// x = Number(false);

// // true is coerced to a 1
// x = 5 + true;

// // false is coerced to 0 (falsy)
// x = 5 + false;

// // Undefined is coerced to 0 (falsy)
// x = 5 + undefined;

// console.log(x, typeof x);

//bài 9: strings(chuỗi)
// let x;

// const name = 'John';
// const age = 31;

// // Concatenation : nối
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// x = `Hello, my name is ${name} and I am ${age} years old`;

// //  thuyoojc tính và phương thức

// //Tạo một "đối tượng chuỗi" (JS tự động thực hiện việc này khi sử dụng thuộc tính hoặc phương thức trên chuỗi nguyên thủy)
// const s = new String('Hello World');

// x = typeof s;

// x = s.length;

// // Access value by key: Truy cập giá trị bằng khóa
// x = s[0];

// // Hiển thị nguyên mẫu của đối tượng chuỗi. Hiển thị các thuộc tính và phương thức
// x = s.__proto__;

// // Change case: Trường hợp thay đổi
// x = s.toUpperCase();
// x = s.toLowerCase();

// // charAt() - trả về ký tự tại chỉ mục đã chỉ định
// x = s.charAt(0);

// // indexOf - trả về chỉ mục của lần xuất hiện đầu tiên của một giá trị được chỉ định trong chuỗi
// x = s.indexOf('d');

// // substring() - tìm kiếm một chuỗi cho một giá trị được chỉ định
// x = s.substring(2, 5);
// x = s.substring(7);

// // slice() - trích xuất một phần của chuỗi và trả về một chuỗi mới
// x = s.slice(-11, -6);

// // trim() - xóa khoảng trắng đầu và cuối chuỗi
// x = '         Hello World';
// x = x.trim();

// // replace() - thay thế tất cả các phiên bản của một chuỗi
// x = s.replace('World', 'John');

// // includes() - trả về true nếu tìm thấy chuỗi
// x = s.includes('Hell');

// // valueOf() - trả về giá trị nguyên thủy của một biến
// x = s.valueOf();

//bài 10:
// const myString = 'developer';

// let myNewString;

// // Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // Solution 3:
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);

//bài 11
// let x;

// const num = new Number(5);

// // toString() - trả về một chuỗi biểu diễn số
// x = num.toString();
// // To get the length
// x = num.toString().length;

// // toFixed() - trả về một chuỗi biểu diễn số có số thập phân được chỉ định
// x = num.toFixed(2);

// // toPrecision() - trả về một số có độ dài được chỉ định
// x = num.toPrecision(3);

// // toExponential() -  chuyển đổi một số thành ký hiệu số mũ và trả về giá trị của nó dưới dạng chuỗi
// x = num.toExponential(2);

// // toLocaleString() - trả về một chuỗi biểu diễn số, sử dụng ngôn ngữ hiện tại
// x = num.toLocaleString('en-US');

// // valueOf - Nhận giá trị
// x = num.valueOf();

// //thuộc tính và phương thức của number

// // Số lớn nhất và nhỏ nhất
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

// console.log(x);

//bai12
// let x;

// // căn bậc 2
// x = Math.sqrt(9);

// // Giá trị tuyệt đối
// x = Math.abs(-5);

// // Round
// x = Math.round(4.2);

// // Round up: Làm tròn lên
// x = Math.ceil(4.2);

// // Làm tròn xuống
// x = Math.floor(4.9);

// // Exponent: Số mũ
// x = Math.pow(2, 3);

// // Minimum number
// x = Math.min(4, 5, 3);

// // Maximum number
// x = Math.max(4, 5, 3);

// // Nhận số/thập phân ngẫu nhiên trong khoảng từ 0 đến 1
// x = Math.random();

// // Get a random number between 1 and 100
// x = Math.floor(Math.random() * 100 + 1);

// console.log(x);

//bai13
// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// // Get the sum
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// // Get the difference
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// // Get the product
// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// // Get the quotient
// const quot = x / y;
// const quotOutput = `${x} / ${y} = ${quot}`;
// console.log(quotOutput);

// // Get the remainder
// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);

//bai14
// let d;

// // Get today's date and time
// d = new Date();

// // Set to a string
// d = d.toString();

// d = new Date(2021, 0, 10, 12, 30, 0);

// // Pass in a string
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');

// // Get current timestamp
// d = Date.now();

// // Get the timestamp of a specific date
// d = new Date();
// d = d.getTime();
// d = d.valueOf();

// // Create a date from a timestamp
// d = new Date(1666962049745);

// // Convert from milliseconds to seconds
// d = Math.floor(Date.now() / 1000);

// console.log(d);

//bai15
let x;
let d = new Date();

// Date methods

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);