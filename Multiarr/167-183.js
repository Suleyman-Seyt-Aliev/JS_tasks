//168 
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];


console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

//2

let arr1 = [[1, 2], [3, 4], [5, 6]];
let Sum = 0;

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    Sum += arr1[i][j];
  }
}

console.log(Sum);

//169
let arr2 = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let Sum1 = 0;

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    for (let k = 0; k < arr2[j].length; k++) {
    Sum1 += arr2[i][j][k];
  }
}
}
console.log(Sum1);

//170
console.log('55');




//171_1
let arr6 = [[1, 2, 3], [4, 5], [6]];
for (let sub of arr6) {
	for (let elem of sub) {
		console.log(elem);
	}
}

//2
let arr7 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

for (let subArr of arr7) {
	for (let elem of subArr) {
	  for (let elem1 of elem) {
		console.log(elem1);
	}
}
}
//172_1
for (let i = 0; i < arr6.length; i++) {
	for (let j = 0; j < arr6[i].length; j++) {
		console.log(arr6[i][j]);
	}
}

//2 
for (let i = 0; i < arr7.length; i++) {
	for (let j = 0; j < arr7[i].length; j++) {
	  	for (let k = 0; k < arr7[i].length; k++) {
		console.log(arr7[i][j][k]);
	  	}
	}
}



//173_1
let arr5 =[]

for(let i = 0; i < 3; i++){
  arr5[i]=[]

for(let j = 0; j < 5; j++){
  arr5[i].push(j+1);
}
}
console.log(arr5)

//2
let arr8 =[]

for(let i = 0; i < 3; i++){
  arr8[i]=[]

for(let j = 0; j < 4; j++){
  arr8[i].push('x');
}
}
console.log(arr8)

//173_3

let arr9 = [];
for (let i = 0; i < 3; i++) {
    arr9[i] = []; 
    for (let j = 0; j < 2; j++) {
        arr9[i][j] = [];
        for (let k = 0; k < 5; k++) { 
            arr9[i][j].push(k + 1); 
        }
    }
}
console.log(arr9);

//175 1
let ar1 = [];

for (let i = 0, k = 1; i < 4; i++) {
	ar1[i] = [];
	
	for (let j = 0; j < 2; j++) {
		ar1[i].push(k++);
	}
}

console.log(ar1);

//2 

let ar2 = [];

for (let i = 0, k = 1; i < 4; i++) {
	ar2[i] = [];
	
	for (let j = 0; j < 3; j++) {
	  k++;
		ar2[i].push(k++);
	}
}

console.log(ar2);

//3 

let ar3 = [];

for (let i = 0, k = 1; i < 2; i++) {
	ar3[i] = [];
	
	for (let j = 0; j < 2; j++) {
	  ar3[i][j] = [];
	  for(let t = 0; t < 2; t++){
		ar3[i][j].push(k++);
	  }
	}
}

console.log(ar3);

console.log(`175 
	№4
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
				 
	for (let i = 0; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k;
			k++; //let k = 1;  ?????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№5
	
	Автор следующего кода хотел сделать вот такой массив:
	
	 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	let k = 1;
	
	for (let i = 0; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k; // k++; ??????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№6
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	let k = 1;
	
	for (let i = 0; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k;
			k--;  //k++;...................................
		}
	}
	
	console.log(arr);
	
	
	№7
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	let k; // let k = 1;?????????????????????????????????
	
	for (let i = 0; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k;
			k++;
		}
	}
	
	console.log(arr);
	
	
	№8
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k; //k++;?????????????????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№9
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0, k++; j < 3; j++) {
			arr[i][j] = k;
			//k++;??????????????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№10
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++; k++) { //k должно обновляться по истечению цикла 
			arr[i][j] = k
			//тут k++; ???????????????????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№11
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = ++k; // начнёт  с 2 ( надо k++)??????????????????
		}
	}
	
	console.log(arr);
	
	
	№12
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	let k = 1;
	
	for (let i = 0; i < 3; i++) {
		arr[k] = [];//arr[i]=[]???????????????????????????????
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k;
			k++;
		}
	}
	
	console.log(arr);
	
	
	№13
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	//let k;
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; k++) {/j++ вместо k++
			arr[i][j] = k;
			//k++; тут 
		}
	}
	
	console.log(arr);
	`)


//176

let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
let sum = 0;

for(let key in obj){
  let key1 = obj[key]
for(let key2 in key1)
{
  sum+=key1[key2]
}
}
console.log(sum)

//2
let obj1 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
let b2 = obj1[2][2]; 
let c1 = obj1[3][1]; 

console.log(b2);
console.log(c1); 
//3

console.log('28')


//177
//1
let obj2 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let sum2 = 0;

for(let key in obj2){
  let key1 = obj2[key]
for(let key2 in key1)
{
  sum2+=key1[key2]
}
}
console.log(sum2)
//2

let obj3 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

let sum1 = 0;

for (let key in obj3) {
  let key1 = obj3[key];
  
  for (let key2 in key1) {
    let key3 = key1[key2];
    
    for (let key4 in key3) {
      sum1 += key3[key4];
    }
  }
}

console.log(sum1);

//178
let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};

console.log(students['group3'][0])



let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};

//179
for (let num in data) {
	for (let name_date of data[num]) {
		console.log(name_date);
	}
}
//179_2
let data1 = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];

for (let num in data1) {
  for (let name_date in data1[num]) {
    // Получаем значение по ключу
    let da = data1[num][name_date];
    console.log(da); // Выводим значение
  }
}


//3 


let data2 = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];


for (let num in data2) {
  
	for (let name_date in data2[num]) {
	  let da = data2[num];
	  for(let dater of da[name_date] ){
		console.log(dater);
	}
}
}

//180 
//1

let employees4 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let real of employees4) {
	console.log(real.name + ' ' + real.salary);
}
//2
let sum7 = 0;
for (let real of employees4) {
  sum7+=real.salary;
	console.log(sum7);
}
//3
let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let sum8 = 0;
for (let real of employees3) {
  if(real.age>=30){
  sum8+=real.salary;
	console.log(sum8);
  }
}
//181
//.....
	//182

	let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];

employees.push({
		name: 'name4',
		salary: 600,
		age: 33,
	})
	
	console.log(employees)

	//181_1

let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};


let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5; 

console.log(months[lang][month])

//2
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}

let year = '2018';
let month1 = '11';
let days_29 = '29';
let delo111 = 0;
console.log(affairs[year][month1][days_29][delo111])

/*3

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key6 = 'key2';
let key7 = 'key4';
console.log(obj[key6][key7]);
*/
/*4
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}


console.log(obj.key2.key4);
*/

/*5

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}


console.log(obj.key2['key4']);
*/
/*6
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

console.log(obj['key2']['key4']);

*/



//183 

let affairs3 = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}

affairs3['2019-12-29'].push('data24');

let newDate = '2019-12-31';
let newData = ['data41', 'data42'];

// Добавляем новую дату в объект
affairs3[newDate] = newData;

console.log(affairs3);


//183_4


let students2 = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};
//5

students2['group1']['subgroup11'].push('student114');


//6 

students2['group1']['subgroup13'] = ['student131', 'student132'];

console.log(students2);

//7
students2['group4'] = {
    'subgroup41': ['student411', 'student412', 'student413']
};

console.log(students2);