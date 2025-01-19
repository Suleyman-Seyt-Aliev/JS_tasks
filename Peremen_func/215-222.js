//216_1
let num0 = 1;
		
function func1() {
	console.log(num0);
}

func1();//1

//216_2


let num1 = 1;
		
function func2() {
	console.log(num1);
}

num1 = 2;//2
func2();

//216_3


function func3() {
	console.log(num2);
}

let num2;

num2 = 1;
func3();//1

num2 = 2;
func3();//2 



//217 

//1
function func4() {
	let num = 5;
	return num;
}

//console.log(num);//ошибка

//2
function func5() {
	let num = 5;
	return num;
}

console.log(func5()); 

//218

//1
let num4 = 1;

function func6() {
	num4 = 2;
}
func6();

console.log(num4);//2

//2

let num5 = 1;

function func7() {
	let num5 = 2;
}
func7();

console.log(num5);//1 

//219
////1

//Определите, не запуская код, что выведется в консоль:

let num6 = 1;

function func8() {
	num6 = 2;
}
func8();

console.log(num6);//2
////2

//Определите, не запуская код, что выведется в консоль:

let num7 = 1;

function func9() {
	num7 = 2;
}

console.log(num7);//1
////3

//Определите, не запуская код, что выведется в консоль:

let num8 = 1;

function func10() {
	let num8 = 2;
}
func10();

console.log(num8);//1
////4

//Определите, не запуская код, что выведется в консоль:

let num9 = 1;

function func11() {
	let num = 2;//1
}

console.log(num9);
func11();
////5

//Определите, не запуская код, что выведется в консоль:

let num10 = 1;

function func12() {
	num10 = 2;
}

console.log(num10);//1
func12();
////6

//Определите, не запуская код, что выведется в консоль:

let num11 = 1;

function func13() {
	num11++;
}

func13();
func13();
func13();
console.log(num11);//4
////7

//Определите, не запуская код, что выведется в консоль:

function func14() {
	num12 = 2;
}

let num12 = 1;
console.log(num12);
func14();//1
////8

//Определите, не запуская код, что выведется в консоль:

function func15() {
	num13 = 2;
}

let num13 = 1;
func15();
console.log(num13);//2



//220 

//1

//Определите, не запуская код, что выведется в консоль:

function funci(localNum) {
	console.log(localNum);//1
}

funci(1);
//2

//Определите, не запуская код, что выведется в консоль:

function funci2(localNum) {
	console.log(localNum);//1
}

let numper1 = 1;
funci2(numper1);
//3

//Определите, не запуская код, что выведется в консоль:

function funci3(localNum) {
	console.log(localNum);//1
}

let numper2 = 1;
funci3(numper2);
numper2 = 2;
//4

//Определите, не запуская код, что выведется в консоль:

let numper3 = 1;

function funci4(localNum) {
	console.log(localNum);//2
}

numper3 = 2;
funci4(numper3);
//5
//Определите, не запуская код, что выведется в консоль:


function funci5(localNum) {
	localNum = 2;
}

let numper4 = 1;
funci5(numper4);
console.log(numper4);//1
//6

//Определите, не запуская код, что выведется в консоль:

function funci6(localNum) {
	numper5 = 2;
}

let numper5 = 1;
funci6(numper5);
console.log(numper5);//2
//7

//Определите, не запуская код, что выведется в консоль:

function funci7(localNum) {
	let numper6 = 2;
}

let numper6 = 1;
funci7(numper6);
console.log(numper6);//1


//221 
//1
function func221(num221) {
	num221 = 2;
}

let num221 = 1;
func221(num221);
console.log(num221);//1

//2 

function func221_2() {
	num221_2 = 2;
}

let num221_2 = 1;
func221_2();
console.log(num221_2); //2

//3 
function func221_3() {
	let num221_3 = 2;
}

let num221_3 = 1;
func221_3();
console.log(num221_3);//1


//222

//1

//Определите, не запуская код, что выведется в консоль:

function func222_1(obj222_1) {
	obj222_1.a = '!';
}

let obj222_1 = {a: 1, b: 2, c: 3};
func222_1(obj222_1);
console.log(obj222_1);//{a: !, b: 2, c: 3}
//2

//Определите, не запуская код, что выведется в консоль:

function func222_2(arg) {
	arg = '!';
}

let obj222_2 = {a: 1, b: 2, c: 3};
func222_2(obj222_2.a);
console.log(obj222_2);//{a: 1, b: 2, c: 3}
//3

//Определите, не запуская код, что выведется в консоль:

function func222_3(obj222_3) {
	obj222_3 = '!';
}

let obj222_3 = {a: 1, b: 2, c: 3};
func222_3(obj222_3.a);
console.log(obj222_3);//{a: 1, b: 2, c: 3}
//4

//Определите, не запуская код, что выведется в консоль:

function func222_4(arr3) {
	arr3.splice(1, 1);
}

let arr3 = [1, 2, 3];
func222_4(arr3);
console.log(arr3);//[1,3]
//5

//Определите, не запуская код, что выведется в консоль:

function func222_5(arr4) {
	arr4.slice(1, 1);
}

let arr4 = [1, 2, 3];
func222_5(arr4);
console.log(arr4);//[1,2,3]
//6

//Определите, не запуская код, что выведется в консоль:

function func222_6(arr5) {
	let newArr = arr5;
	newArr[0] = '!';
}

let arr5 = [1, 2, 3];
func222_6(arr5);
console.log(arr5);//[!, 2, 3]