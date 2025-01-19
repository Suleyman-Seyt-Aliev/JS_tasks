//279 

let arr = [1, 2, 3, 4, 5];

let res = arr.map(function(elem) {
	return elem ** 2;
});

console.log(res); 


//2

let arr1 = [1, 2, 3, 4, 5];

let res1 = arr1.map(function(elem) {
	return elem + '!';
});

console.log(res1);

//3

let arr2 = ['java', 'css', 'html'];

let res2 = arr2.map(function(elem) {
	return elem.split('').reverse().join(''); 
});

console.log(res2);

//4

let arr3 = ['123', '456', '789'];

let res3 = arr3.map(function(elem) {
	return elem.split(''); 
});

console.log(res3);


//5

let arr4 = [1, 2, 3, 4, 5];

let res4 = arr4.map(function(elem, index) {
	return elem * index;
});

console.log(res4);

//280 

let arr5 = [1, 2, 3, 4, 5];
let sum5 = 0;

arr.forEach(function(elem) {
	sum5 += elem**2;
});

console.log(sum5);

//281 потом
//1
let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1, 11, 7];

let rez = numbers.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(rez);

//2
let rez1 = numbers.filter(function(elem) {
	if (elem < 0) {
		return true;
	} else {
		return false;
	}
});

console.log(rez1);

//3

let rez2 = numbers.filter(function(elem) {
	if ( elem > 0 &&  elem < 10 ) {
		return true;
	} else {
		return false;
	}
});

console.log(rez2);

//4

let str = ['javascript', 'java', 'css', 'html']

let rez3 = str.filter(function(elem) {
	if ( elem.length > 5 ) {
		return true;
	} else {
		return false;
	}
});

console.log(rez3);

//5
let arr281 = [1, 2, 3, 4, 8];

let rezik = arr281.filter(function(elem, index) {
	if (elem * index <30) {
		return true;
	} else {
		return false;
	}
});

console.log(rezik);

//6
let arr281_6 = [1, 2, [3, 4], 5, [6, 7]];

let rezik1 = arr281_6.filter(function(elem, index) {
	if (!Array.isArray(elem)) {
		return true;
	} else {
		return false;
	}
});

console.log(rezik1);



//282
//1
let array = [1, 2, 3, 4, 5];

let check = array.every(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(check);

//2
let array1 = [1, 2, 3, 4, 8];

let check1 = array1.every(function(elem, index) {
	if (elem * index <30) {
		return true;
	} else {
		return false;
	}
});

console.log(check1);

//283

//1
let array28 = [2, 4, 6, 8];

let results = array28.some(function(elem) {
	return elem > 0;
});

console.log(results);

//2
let array283 = [9,8,7,6,5]

let result = array283.some(function(elem,index){
	return elem * index > 30;
})
console.log(result)

//284 

//find найдёт первый подходящий элемент под условие соотвественно ластфайд найдёт последний 
let result1 = array283.find(function(elem){
	return elem > 3;
})
console.log(result1)

//index напишет индекс первого подходящего соотвественно ластиндекс найдёт последний 

let result2 = array283.findIndex(function(elem){
	return elem > 3;
})
console.log(result2)

//285
/*массив.reduce(function(промежуточный результат, элемент, индекс, массив)

Промежуточный результат - это переменная, в которой будет накапливаться то значение, 

которое вернет метод reduce, когда переберет все элементы массива*/

let arra = [1, 2, 3, 4, 5, 6];

let ress = arra.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(ress);//ReduceRight перебирает справа налево