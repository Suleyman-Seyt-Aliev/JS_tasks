//259

//1



function test1() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

let func1 = test1();
console.log(func1());//3
//2



function test2() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

console.log(test2()());//3
//3


function test3() {
	let num1 = 1;
	
	return function() {
		return num1 + num2;
	}
}

let num2 = 2;
let func3 = test3();
console.log(func3());//3
//4



function test4() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num4 = 2;
let func4 = test4();
console.log(func4());//1

//261
//1-2-3
function test() {
	let num = 10;
	
	return function() {
        
        if(num>0){
		console.log(num);
        }
        num--;
        if(num<=0){  
            console.log('отсчёт окончен')
        }
	}
}

let func = test();

func(); 
func();
func();
func(); 
func(); 
func(); 
func();
func();
func(); 
func(); 
func(); 
func(); 

//262 
//1
function func2() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

func2()();//0
func2()();//0
func2()();//0

//2 
function func40() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

let test11 = func40;

test11()();//0
test11()();//0
test11()();//0

//263

//1

let counter = 0;
		
function test33() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let func12 = test33;

let func11 = func12();
let func20 = func12();
func11();//0
func20();//1
func11();//2
func20();//3

//2

function test4() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func22 = test4()();

let func17 = func22;
let func23 = func22;
func17();//
func22();//
func17();//
func22();//

//3 

function test263() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func263 = test263();

let func1_263 = func263();
let func2_263 = func263();
func1_263();//0
func2_263();//1
func1_263();//2
func2_263();//3