//200
//1


function func() {
	console.log('Enver');
}

func(); 
//2
function sum(){
  let sum = 0;
  for(let i = 1; i<100; i++){
     sum += i;
  }
  console.log(sum)
}

sum();


//201
//1
function funct(num) {
	console.log(num ** 3);
}

funct(9)
//2
function positive (numba) {
  if(numba>0){
    console.log('+++')
  }
  if(numba<0){
    console.log('---')
  }
}

positive(-7)

//202

function three(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}

three(1,7,9)



//203

function three1(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}

let param1 = 1;
let param2 = 2;
let param3 = 3;
three1(param1,param2,param3)


/*
//204

//1 

function func(num = 5) {
	console.log(num * num);
}
//Функция без параметра выведет 25, остальные - 4, 9

func(2);
func(3);
func();

//2
function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}

//Функция без параметра выведет 0, самая первая - 5, а вторая, не имеющая второго параметра - 3
func(2, 3);
func(3);
func();

*/



//205
//1
function v3(num) {
	return num ** 3;
}

let res = v3(3);
console.log(res);

//2
function v2(num) {
	return num ** 2;
}

let rez1 = v2(3);
let rez2 = v2(4);
let summer = rez1 + rez2;
console.log(summer)
 


//206
//1

function sqrt1(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

let res23 = round(sqrt1(2))

console.log(res23)

//2 

function sqrt2(num) {
	return Math.sqrt(num);
}

function sum3(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res22 = sum3(sqrt2(2),sqrt2(3),sqrt2(4))

console.log(res22)

//3
function round1(num) {
	return num.toFixed(3);
}

let res21 = round1(res22)

console.log(res21)



//207
//1

function func8(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func8(3) );//выведется 3, так как код после return в функции не выполняется 

//2 

function func9(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func9(10) ); //выведет 100, так как выполняется return условия else 
console.log( func9(-5) ); //выведет 5 так как выполняется ретурн условия (num <= 0)

//3
function func10(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func10(10) ); //100. код условия проигнорируется и будет выполнен return num ** 2;
console.log( func10(-5) ); //выведет 5 по условию иф 



//208
//1

function func11(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}

console.log( func11(5) );//ретурн прерывает цикл 



//209
//1

function func12(num) {
	let sum = 0;
	
	for (let i = 0; i <= num; i++) {
		num/=2;
		
	if(num < 10){
	  return i + 1;
	}
	}
}

console.log( func12(100) );



//210
//1

function func13(num1, num2) {
	
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
	
}

console.log(func13(3, 4));



//211
//1

function isPositive(arr) {
	for (let elem of arr) {
		let sum = 0;
		if (elem%2==0) {
			sum++;
		}
		if(sum=arr.lentgh){
		  return true
		}
		else{
		  return false;
		}
	}
	
	
}

let arr4 = [1,2,3,4,6]

console.log(isPositive(arr4))

//211_2 
function isFour(num) {
	for (let i = 0; i < String(num).length - 1; i++  ) {
		let sum = 0;
		if (num[i]%2==0) {
			sum++;
		}
		if(sum = num.lentgh){
		  	return true;
		}
		else{
		  	return false;
		}
	}
	

}

let numpa = 1234;
console.log(isFour(numpa))

//3 

function twins(arr) {
    
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] === arr[i - 1]) {
            return true; 
        }
    }
    return false; 
}

let array = [2,2,0,9,11]

console.log(twins(array))

//212

//1

function funk1(a, b) {
	return a == b 
}

//2 

function funk2(a, b) {
	return a != b 
} 

//3 

function funk3(a, b) {
	return a + b >= 10 
}

//4 

function funk4(num) {
	return num > 0 
}

let a = 3
let b = 8 
let num = 7
console.log(funk4(num))
console.log(funk3(a,b))



//213 

//1

// название функции не соответствует тому что выводит функция
let array2 = [2,4,5,6]
console.log(sum1(array2))

function sum1(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res ;
}
 


//2


let array3 =[6,7,8,9]

   function func300(arr, arr1) {
       let res1 = 0; 
       for (let elem of arr) {  
           res1 += elem;
       } 
       let res2 = 0;
       for (let elem1 of arr1) {
           res2 += elem1; 
       }
       return res1 + res2;
   }
   

console.log(func300(array2,array3))
//3


//название функции не отражает то что она делает

function getSum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}

console.log(getSum(array2)) 



//214

//1

function func21(num) {
	return num;
}
function func22(num1) {
	return num1;
}

console.log( func21(3) + func22(5) );

//2

function sumka(arr) { 
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

console.log(sumka([1, 2, 3, 4, 5]));

//3 

let arr = [1, 2, 3, 4, 5];

function func23(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
} 

console.log(func23([1, 2, 3, 4, 5])) 



//4 

function func100() {
	return 3;
}
function func200() {
	return 5;
}

console.log( func100() + func200() );


//5 


function sumka2(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

console.log(sumka2([1, 2, 3, 4, 5]))

//6 

function sumka3(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}

let resik = sumka3([1, 2, 3, 4, 5]);
console.log(resik);

//7
function add(num) {
	if (num <= 9) {
		return '0' + num;
	}else{
		return num;
	}
}
let numpi = 13;
console.log(add(numpi))

//8

let arra = [1, 2, 3, 4, 5];
let sumk = sumki(arra);
console.log(sumk);

function sumki(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}
//9


 

function getDigitsSum(num) { 
    let arr = num.split(''); 
    let sum = 0; 
  
    for (let elem of arr) { 
        sum += Number(elem); 
    } 
  
    return sum; 
}
let number1 = '12345'; 
console.log(getDigitsSum(number1));
//10


function isPrime(num) {
	let sum  = 0;
	for (let i = 2; i < num; i++) {
		
        if (num % i == 0) {
			sum++;
        }
	} 
		if(sum>2){
            return true;
		} else {
			return false;
		}
	
}

let number = 13
console.log(isPrime(number)); 


//215

//1 

function sumka4(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}

let resik1 = sumka4([1, 2, 3, 4, 5]);
console.log(resik1);

//2 

function deliteli(num){
	let arr = []
	for(i = 2; i < num; i++){
		if(num%i==0){
          arr.push(i);
	    }
}
	return arr;
}

let number2 = 12;
console.log(deliteli(number2)) 

//3 

function array5(str) {
	let arr = [];
	
	for (let elem of str.split('')) {
		arr.push(elem)
	}
	return arr;
}

let resik2 = array5('12345');
console.log(resik2); 

//4 
function naoborot(str){
	let arr = [];
	for(let i = str.length - 1; i>=0; i-- ){
	
	arr.push(str[i])
  }
  return arr.join('');
} 

let resik3 = naoborot('12345');
console.log(resik3); 

//5 

function upper(str){
	
let res = str.slice(0, 1).toUpperCase() + str.slice(1);

console.log(res);
}

let strochka = 'abcde';
console.log(upper(strochka))


//6
let text = 'Я люблю программировать';
console.log(Upper(text));
 
function Upper(str) {
  let res = "";
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    res += words[i][0].toUpperCase() + words[i].slice(1) + " ";
  }
  return res.trim();
}



//7
function arrayis(arr){
	let arr1 = [];
for(let i = 1; i < 10; i++)
{
	arr1.push(i)
}
return arr1;
}

let arr5 = [];
console.log(arrayis(arr5))

//8
function sum123(num){
	let arr=[]
	let sum = 0
	for(let i = 0; i<num.lentgh-1; i++){
	 arr.push(num.split(''))
		sum+=arr[i]	
	}
	return sum;
}
let nump = 123
console.log(nump)

//9

function year1(year){
	if(year>365){
		return true
	}else{
		return false
	}
}
let year = 365;//невисокосный
console.log(year1(year))

//10

function days(secund){
	return Math.floor(secund/86400)
}
console.log(days(88888))

//11
function Random_array(arr){
	let arr1 = [];
for(let i = 1; i < 10; i++)
{
	arr1.push(i)
}
return  arr1[Math.floor(Math.random() * arr1.length)];
;
}

let arr6 = [];
console.log(Random_array(arr6))


//12 


function isPrime1(num) {
	let sum  = 0;
	for (let i = 2; i < num; i++) {
		
        if (num % i == 0) {
			sum++;
        }
	} 
		if(sum>2){
            return true;
		} else {
			return false;
		}
	
}

let number3 = 13
console.log(isPrime1(number3));