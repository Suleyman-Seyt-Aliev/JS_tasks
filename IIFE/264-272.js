//264

//1
!function() {
	console.log('!');
}();// !

//2

//function() {
//	console.log('!');
//}();//ошибка 

//265

let result = function() {
	return '!';
}();
		
console.log(result);//!

//2
let result2 = function() {
	return '!';
};
		
console.log(result2);//function() {return '!';};

//3

let result3 = function() {
	return '!';
};
		
console.log(result3());//!

//266

//1

let result4 = function() {return 1;}() + function() {return 2;}();
console.log(result4);//3

//267

//1. !
let result5 = (function() {
	return '!';
}());

console.log(result5);
//2. !
let result6 = (function() {
	return '!';
})();

console.log(result6);
//3. function() { return '!'; }
let result7 = (function() {
	return '!';
});

console.log(result7);
//4. !
let result8 = (function() {
	return '!';
});

console.log(result8());

//268 

(function(num1, num2) {
	console.log(num1 + num2);
})(1, 2);//3 


//269 
//1
(function() {
    return function() {
	return function() {
		console.log('!');
	};
}
})()()();

//2
(function(num1) {
    return function(num2) {
		console.log(num1 + num2 );
	};
})(1)(2);
//3
(function(num1) {
    return function(num2) {
	return function(num3) {
		console.log(num1 + num2 + num3);
	};
}
})(1)(2)(3);


//271 

//1 
let str = 'str';

(function() {
	console.log(1);//1
})();

//2
/*let str1 = 'str'

(function() {
	console.log(1);
})();//ошибка*/

//272

let func272 = (function() {
	let num = 1;
	
	return function() {
		if(num<=5){
        console.log(num);
        }
		num++;
        if(num>5){
            num = 0;
        }
	}
})();

func272(); 
func272(); 
func272(); 
func272(); 
func272();
func272(); 
func272(); 
func272();
func272(); 
func272(); 
func272();