//274 



function func(arr) {
	console.log(arr.shift(), arr);
	
	if (arr.length != 0) {
		func(arr);
	}
}
let arr = [1, 2, 3, 4, 5];
func(arr)
//275
function getSum(arr) {
	let sum = arr.shift();
	
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	
	return sum;
}
let arr1 = [1, 2, 3, 4, 5];
console.log(getSum(arr1));


//276
//1
function PrimitiveValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            PrimitiveValues(obj[key]); 
        } else {
            console.log(obj[key]); // Выводим примитивное значение
        }
    }
}

let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
PrimitiveValues(obj);
//2
function func(arr) {
	let array = []
	for (let elem of arr) {
		if (Array.isArray(elem)) {
			array = array.concat(func(elem)); 
		} else {
			array.push(elem)
			
		}
	}
	return array
}

console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

//277

function func2(obj) {
	let sum = 0;
	
	for (let key in obj) {
		if (typeof obj[j=key] == 'object') {
			sum += func2(obj[key]);
		} else {
			sum += obj[key];
		}
	}
	
	return sum;
}

console.log(func2({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})) 

//2
function func3(arr) {
	let str = '';
	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			str += func3(elem);
		} else {
			str += elem
		}
	}
	
	return str;
}
console.log(func3(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])) 


//278 

function func4(arr) {
	let sum = [];	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			sum += func4(elem);
		} else {
			sum += elem ** 2 + ' ';
		}
	}
	return sum;
}
console.log(func4([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));