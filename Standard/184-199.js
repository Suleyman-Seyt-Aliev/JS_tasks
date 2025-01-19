//184

console.log(Math.pow(2, 10))

console.log(Math.sqrt(245))



let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let num = Math.pow(arr[i], 3);
    sum += num;
}

console.log(sum);

console.log(Math.sqrt(sum))

//185 
let number = 379;

let sqrt = Math.sqrt(number)
let floor = Math.floor(sqrt);
let fix = sqrt.toFixed(1)
let fixed = sqrt.toFixed(2)

console.log(floor);
console.log(fix);
console.log(fixed);

let number1 = 587;

const result = {
    floor: Math.floor(Math.sqrt(number1)),
    ceil: Math.ceil(Math.sqrt(number1))
};

console.log(result);

//186 

console.log(Math.max(4, -2, 5, 19, -130, 0, 10))
console.log(Math.min(4, -2, 5, 19, -130, 0, 10))




//187
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

//2  

let arr5 = [];
for(let i = 0; i<10; i++){
function getRandomInt1(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numka = getRandomInt1(1, 100);
      arr5.push(numka);
}

console.log(arr5);



//188

let a = - 7
let b =  8 
console.log(Math.abs(a+b))

//189

let str = 'JS'
console.log(str.toLowerCase())
str='js'
console.log(str.toUpperCase())

//190 

let stroka = 'я учу javascript'

console.log(stroka.substring(2, 5))
console.log(stroka.slice(2, 5))
console.log(stroka.substr(2, 3))

console.log(stroka.substring(6, 16))

console.log(stroka.slice(6, 16))



console.log(stroka.substr(6, 10))

//191 

str4 = 'dghsjka.html'
console.log(str4.endsWith('.html'))

str4 = 'http://'
console.log(str4.startsWith('http://'))
//192
let elem = '-'
let str5 = '1-2-3-4-5'
while(str5.includes(elem)){
 str5 = str5.replace(elem,'.')
}

console.log(str5)

//193 
let str7 = '1-2-3-4-5'

let arr7 = str7.split('-')
console.log(arr7)

let str8 = '12345'
arr7 = str8.split('')
console.log(arr7)

let arr8 = [1, 2, 3, 4, 5];

let str9 = arr8.join('-')
console.log(str9)

//194-196 сделаю

//194
let arr11 = [1, 2, 3];
let res1 = arr11.shift();

console.log(res1);
//2
res1 = arr11.pop();

console.log(res1);

//3 
let arr12 = [1, 2, 3];
arr12.push(4, 5)

console.log(arr12)

//4

let arr13 = [1, 2, 3];

arr13.unshift(4,5,6);
console.log(arr13)


//195
//1
let arr14 = [1, 2, 3, 4, 5];
let sub = arr14.slice(0,3);
console.log(sub);
//2
sub = arr14.slice(3,5);
console.log(sub);

//196

//1 
arr14.splice(1,2)

console.log(arr14)
//2
let arr15 = [1, 2, 3, 4, 5];

arr15.splice(3,0,'a','b','c')
console.log(arr15)

//3
let arr16 = [1, 2, 3, 4, 5];

arr16.splice(1,0,'a','b')
arr16.splice(5,0,'c')
arr16.splice(8,0,'e')
console.log(arr16)

//197 
let arr10 = [1, 2, 3, 4, 5];
let res = arr10.includes(3);

console.log(res);

//198

let obj = {'a': 1, 'b': 2, 'c': 3};
console.log(Object.keys(obj));

//199



//1-4
let num10 = 12345;
let arr110 = String(num10).split('');

let sum12 = 0;
for (let digit of arr110) {
	sum12 += Number(digit);
}

console.log(sum12);

//5 

let num11 = 12345;
let arr111 = String(num11).split('');

let prod = 1;
for (let digit of arr111) {
	prod *= Number(digit);
}

console.log(prod); 