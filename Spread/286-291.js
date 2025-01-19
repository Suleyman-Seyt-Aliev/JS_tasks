//286 

let arr = [1, 2, 3, 4, 5];

function func1(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(func1(...arr)); 
//... - оператор spread, разделяет массив на отдельные значения

//287 

function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );//260


//288
// arr = [1, 2, 3, 4, 5];
console.log(Math.min(...arr))

//289

//1



let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];

let ar  = ['a', ...ar1, 'b', 'c', ...ar2];//['a', 1, 2, 3, 'b', 'c', 4, 5, 6]
console.log(ar);
//2



let arrr1 = [1, 2, 3];
let arrr2 = [4, 5, 6];

let arrr  = ['a', ...arrr1, ...arrr1, 'b', 'c'];
console.log(arrr);//['a', 1, 2, 3, 1, 2, 3, 'b', 'c']
//3



let arra1 = [1, 2, 3];
let arra2 = [...arra1, 4, 5, 6];

let arra  = ['a', 'b', 'c', ...arra2];
console.log(arra);//['a', 'b', 'c', 1, 2, 3, 4, 5, 6]
//4



let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5, 6];
let array3 = [...array2, 7, 8, 9];

let array  = [0, ...array3];
console.log(array);//[0...9]
//5



let arrs1 = [1, 2, 3];
let arrs2 = [...arrs1];

console.log(arrs2);//[1,2,3]

//290

//1



let massiv = [...'12345'];
console.log(massiv);//['1'...'5']
//2



let massiv1 = ['a', ...'12345'];
console.log(massiv1);//['a', '1', '2', ..., '5']
//3



let massiv2 = [...'12345', ...'56789'];
console.log(massiv2);//['1',..,'5','5',...,'9']
//4



let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, ...'12345'];

console.log(arr2);//['a','b','c','1',...,'5']


//291 
/*

Оператор spread не применим к числам:

let arr = [...12345]; // будет ошибка
Для решения проблемы следует преобразовывать число в строку, вот так:

let arr = [...String(12345)]; // получится массив ['1', '2', '3', 
	'4', '5'] 

    */