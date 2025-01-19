//144
let arr = ['a', 'b', 'c', 'd', 'e'];

for(let elem of arr){
    console.log(elem);
}
//145
let obj = {x: 1, y: 2, z: 3};
for(let key in obj){
    console.log(key)
}

for(let key in obj){
    console.log(obj[key])
}
//146

//146

let num = 1;
while(num<100){
    num++;
    console.log(num);
}

let num1 = 11;

while(num1<33){
    num1++;
    console.log(num1)
}

let i = 0;
let num2 = 3;

while(num2<1000){
    num2*=3;
    console.log(num2)
    ++i;
}

console.log('Количество итераций - ' + i)

//147

for(let i = 0; i<=100; ++i)
{
    console.log(i);
}

for(let i = 11; i<=33; ++i)
    {
        console.log(i);
    }

    for(let i = 0; i<=100; ++i)
        {
            if(i%2==0){
                console.log(i);
            }
        }
        for(let i = 0; i<=99; ++i)
            {
                if(i%2==1){
                    console.log(i);
                }
            }

            for(let i=100; i>=0; i-- ){
                console.log(i);
            }
        
    //148
   //1
    arr = ['a', 'b', 'c', 'd', 'e'];

    for (let i; i < arr.length; i++){
        console.log(arr[i])
    }
//2
    for (let i = 1; i < arr.length -1; i++){
        console.log(arr[i])
    }

///3
    for (let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i])
    }
//4
    arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
//149
//1
let arr1 = [2, 5, 9, 15, 1, 4];

for(let i = 0; i < arr1.length; i++ )
{
    if(arr[i] > 3 && arr[i] <10){
        console.log(arr[i])
    }
}

//2

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for(let key in obj){
    if(obj[key]%2!=0)
        console.log(obj[key])
}
//150
let res=0;
for(let i = 0; i<=100; ++i)
    {
      
        if(i%2!=1){
             res = res + i;
        
        }
    }
            console.log(res)
        
    
  let res1 = 0
    for(let i = 0; i<=99; ++i)
        {
            if(i%2!=0){
                res1 = res1 + i;
            }
          
            
        
        }

        console.log(res1)
        let res2 = 1;
        for(i=1; i<20; i++){
        res2 =  res2 * i;

        }
        console.log(res2)
//151/1
let arr3 = [2, 5, 9, 3, 1, 4];   
res = 0;  
for(let elem of arr3){
    res+=elem;
}
console.log(res);

let res3 = 0;
//151/2
for(let elem of arr3){
    if(elem % 2 != 1 ){
    res3+=elem;
    }
}
console.log(res3);

//151\3
let res4 = 0;  
for(let elem of arr3){
    res4+=elem;
}
console.log(res4);

//151/4
let res5 = 1;  
for(let elem of arr3){
    res5*=elem;
}
console.log(res5);

//152
let str = '';

for(let i=0; i<5; i++){
  str+='-';
}
console.log(str);

let str1 ='';
for(let i=1; i<10; i++){
  str1+=i;
}
console.log(str1);

let str2 ='';
for(let i=9; i>0; i--){
  str2+=i;
}
console.log(str2);

let str3 ='';
for(let i=1; i<10; i++){
  str3+='-'+ i;
}
console.log(str3);


//153


for(let i=10; i<1000; i++){
  let str3 = String(i);
  
    console.log(str3[0]);  
  
}

for(let i=10; i<1000; i++){
  let str4 = String(i);
  
    console.log(str4[0]+str4[1]);  
  
}

for(let i=10; i<1000; i++){
  let str5 = String(i);
  if(str5[0]==='1')
    console.log(i);  
  
}

for(let i=10; i<1000; i++){
  let str6 = String(i)
  let fir = Number(str6[0])
  let two = Number(str6[1])
  if(fir + two===5)
    console.log(i);  
  
}

//154


arr7 = [1,2,3,0,9]
for(let elem of arr7){
  if(elem===0){
    break;
  }  
  console.log(elem);
}

let res9 = 0;
arr8 = [1,2,3,-1,9]
for(let elem1 of arr8){
   res9+=elem1;
  if(elem1<0){
    break;
  }  
  console.log(res9);
}

let rex = -1;
for(let i = 0; i<arr8.length; i++){
  if(arr8[i]===3){
    rex = i;
    break;
  }  
  
}

console.log('Позиция тройки ' + rex);
let count = 0;
let res10 = 0;
for(let i = 1; res10 < 100; i++){
   res10 += i; 
   count++;
}
console.log(count)

//156


for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(i);
  }
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(String(i) + String(j) + " ");
  }
}


//159

let arr12 = [];

for (let i = 1; i <= 10; i++) {
	arr12.push(i);
}

console.log(arr12);

let arr11 = [];

for (let i = 1; i <= 10; i++) {
	arr11.push('x');
}

console.log(arr11);



let arr13 = [-1, 2, 3, -4, 5, 6];
let arr14 =[];
for(let i = 0; i < arr13.length; i++){
if(arr13[i] > 0){
  arr14.push(arr13[i]);
}
}
console.log(arr14);

//160

let arr15 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr15.length; i++) {
	arr15[i] *= arr15[i];
}

console.log(arr15);

let arr16 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr16.length; i++) {
	 arr16[i]--;
}

console.log(arr16);

let arr17 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr17.length; i++) {
	 arr17[i]+=10;
}

console.log(arr17);

//161
let arr18 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr19 = [1, 2, 3, 4, 5, 6, 7];
let obj1 = {};

for (let i = 0; i <= 4; i++) {
	obj1[arr18[i]] = arr19[i];
}

console.log(obj1);



let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj3={};
for (let key in obj2) {
	if(obj2[key]% 2 ===0){
	  obj3[key]=obj2[key];
	}
}

console.log(obj3);

let obj4 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj5={};
for (let key in obj4) {

	  obj5[obj4[key]]=key;
	  
	//console.log(obj5[obj4[key]]);
	//console.log(obj5);
}

console.log(obj5);

//162


let obj6 = {x: 1, y: 2, z: 3};
for (let key in obj6) {
	obj6[key] *= obj6[key];
}
console.log(obj6);

let obj7 = {x: 1, y: 2, z: 3};
for (let key in obj7) {
	obj7[key] += 1;
}
console.log(obj7);

//163

let arr22 = ['a', 'b', 'c', 'd', 'e'];

let flag = false;

for (let elem of arr22) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

flag = false;
let num3 = 7;
let count3 = 0; 
for(i = 1; i < 10; i++ ){
  if(num3%i==0){
    count3++;
  }
  if(count3>2){
    flag = true;
  }
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

//164

let arr23 = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let i = 0; i < arr23.length; i++) {
  let Digit = Math.floor(arr23[i] / 10);
  if (Digit === 1 || Digit === 2) {
    sum += arr23[i];
  }
}

console.log(sum); // Вывод: 51 

//165 

let obj77 = {a: 10, b: 20, c: 30, d: 40, e: 50}; 
let sum7 = 0; 

for (let elem in obj) { 
    
    if (elem[0] === 'a' || elem[0] === 'b') { 
        sum7 += obj77[elem]; 
    } 
} 

console.log(sum7);

alert(`166 ЗАДАНИЕ:
работает: 1, 3, 5, 6, 9, 10, 14, 18
не работает: 2, 4, 7, 8, 11, 12, 13, 15, 16, 17, 19 , 20, 21
`)

//167

/*

for (i = 1; i <= 100; i++) {
	console.log(i);
}

for (i = 100; i > 0; i--) {
	console.log(i);
}

for (i = 1; i <= 100; i++) {
	if(i%2===0){
	console.log(i);
}
}
//4
let ar = []
for (let i = 1; i <= 10; i++) {
	ar.push('x');
}
console.log(ar);*/

/*

let ar1 = []
for (let i = 1; i <= 10; i++) {
	ar1.push(i);
}
console.log(ar1);

let ar2 = [1, 23, 11, 3, 5];
let ar3 = [];

for (let i = 0; i < ar2.length; i++) {
    if (ar2[i] > 0 && ar2[i] < 10) {
        ar3.push(ar2[i]); 
    }
}

console.log(ar3);

let flag3 = false
for (let i = 0; i < ar2.length; i++) {
    if (ar2[i] ===5 ) {
       flag3 = true;
    }
}

console.log(flag3);
//8
let sum100 = 0;
for (let i = 0; i < ar2.length; i++) {
   
       sum100+= ar2[i];
    
}

console.log(sum100);


let sum101 = 0;
for (let i = 0; i < ar2.length; i++) {
   
       sum101+=(ar2[i]*ar2[i]);
    
}

console.log(sum101);
//10
console.log(sum100/ar2.length);


let num11 = 9;
let fuct = 1;
for (let i = 1; i <= 9; i++){
  
  fuct *=i;
}
console.log(fuct)

let ar5 = []

for (let i = 1; i <= 10; i++){
  
  ar5.push(i);
}

console.log(ar5)


let ar6 = [10, -5, 20, -15, 30, 40, -2];
let positiv = 0;

for (let i = 0; i < ar6.length; i++) {
  if (ar6[i] > 0) {
    positiv += ar6[i];
  }
}

console.log("Сумма положительных элементов:", positiv);

//14
let ar7 = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < ar7.length; i++) {
  let Digit1 = Math.floor(ar7[i] / 10); 
  if (Digit1 === 1 || Digit1 === 2 || Digit1 === 5) {
    console.log(ar7[i]);
  }
}
//15
for (i = ar7.length; i>0; i--) {
  console.log(ar7[i])
}
*/


//14
/*
let ar8 = [0, 11, 2, 50, 4, 3000];

for (let i = 0; i < ar8.length; i++) {
  if (ar8[i]===i) {
    console.log(ar8[i]);
  }
}

let ar9 = [0, 11, 2, 50, 4, 3000];

for (let i = 0; i < ar9.length; i++) {
     document.write(ar9[i]+'<br>');
 }
//18
 for (let i = 0; i < ar9.length; i++) {
     document.write('<p>' +ar9[i]+'</p>');
 }

 */
/*
//19
 let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

for (let i = 0; i < days.length; i++) {
  if (i === 5 || i === 6) { // Проверка на выходные
    document.write("<b>" + days[i] + "</b><br>");
  } else {
    document.write(days[i] + "<br>");
  }
}

//20

for (let i = 0; i < days.length; i++) {
  if (days[i]==='Суббота') {
    let day = days[i]; 
    document.write("<i>" + day + "</i><br>");
  } else {
    document.write(days[i] + "<br>");
  }


}

*/

/*
//21
let obj17 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for(let key in obj17){
  obj17[key]*=1.1;
  console.log(Math.floor(obj17[key]));
}
//22
let obj18 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let key in obj17){
 if(obj18[key]>400){
  obj18[key]*=1.1;
  console.log(Math.floor(obj18[key]));
}
}

*/
/*
//23
let arr33 = [1, 2, 3, 4, 5];
let arr34 = [6, 7, 8, 9, 10];

let newObj = {};

for (let i = 0; i < arr33.length; i++) {
  newObj[arr33[i]] = arr34[i];
}

console.log(newObj); 
//24
let new_obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
sumkey = 0;
sumobj = 0;

for(let key in new_obj){
  
  sumkey+=+key;
  sumobj+=new_obj[key];
 
}

 console.log(sumkey);
 console.log(sumobj);
 
 let del = sumobj/sumkey;
 console.log(del);
 */
 
 //let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

 
/*
//25
 
 let obj101 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
 let key_s = []
 let ob_j = [];
 for(let key in obj101){
   key_s.push(key);
   ob_j.push(obj101[key]);
   
 }
 
 console.log(key_s)
 console.log(ob_j)
 
 
 
 //26
 
 let obj102 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let new_arr = [];

for (let key in obj102) {
  if (obj102[key] >= 100 && obj102[key] < 200 || obj102[key] >= 200 && obj102[key] < 300) {
    new_arr.push(obj102[key]);
  }
}

console.log(new_arr); 

*/


/*
//27
let new_arr3 = ['a', 'b', 'c', 'd', 'e'];

let newObj1 = {};

for (let i = 0; i < new_arr3.length; i++) {
  newObj1[i + 1] = new_arr3[i]; 
}

console.log(newObj1); 

 

//28

let newObj1 = {};

for (let i = 0; i < new_arr3.length; i++) {
  newObj1[new_arr3[i]] = i+1; 
}

console.log(newObj1); 

*/