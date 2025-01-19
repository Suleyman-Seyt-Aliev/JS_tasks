// ==================80#1======================
// let obj = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'};
// console.log(obj);
// ==================81#1======================
// let obj = {1: 'September', 2: 'October', 3: 'November', 4: 'December', 5: 'January', 6: 'Febrary', 7: 'March', 8: 'April', 9: 'May', 10: 'June', 11: 'Jule', 12: 'August'};
// console.log(obj);
// ==================82#1======================
// let user = {name: 'Abdurahman', surname: 'Dgepparov', patronymic: 'Lumanovic'}
// console.log(user);
// ==================83#1======================
// let date = {year: '2024', month: '11', day: '16'}
// console.log(date.year , date.month , date.day);
// ==================84#1======================
// let obj = {
// 	'1a': 1,
// 	 b2: 2,
// 	'с-с': 3,
// 	'd 4': 4,
// 	 e5: 5
// };
// console.log(obj)
// ==================84#2======================
// let obj = {
// 	'1a': 1,
// 	 b2: 2,
// 	'с-с': 3,
// 	'd 4': 4,
// 	 e5: 5
// };
// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);
// ==================85#1======================
// let obj = { x: 1, y: 2, z: 3 };
// const squaredObj = Object.fromEntries(
//  Object.entries(obj).map(([key, value]) => [key, value ** 2])
// );
// console.log(squaredObj);
// ==================86#1======================
// let obj = {};
// obj.a = 111;
// obj.b = 222;
// obj.c = 333;
// console.log(obj);
// ==================87#1======================
// let obj = {3: 'ььь', 1: 'ккк', 7: 'щщщ'};
// ==================88#1======================
// let obj = {x: 1, y: 2, z: 3};
// let keys = Object.keys(obj);
// console.log(keys);
// ==================89#1======================
// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);
// ==================90#1======================
// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);
// ==================91#1======================
// let obj = {x: 1, y: 2, z: 3};
// let key = 'x'
// console.log(obj[key]);
// ==================91#2======================
// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);
// ==================92#1======================
// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);
// ==================92#2======================
// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);
// ==================93#1======================
// let key = 'x';
// let obj = {
// 	[key]: 1,
// 	y: 2,
// 	z: 3
// };
// ==================93#2======================
// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };
// console.log(obj);
// ==================102#1======================
// const arr = [1, 2, 3, 4, 5];
// const res = arr[1] + arr[2];
// console.log(res);
// ==================103#1======================
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);
// ==================103#2======================
// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);
// ==================103#3======================
// let obj = {x: 1, y: 2, z: 3};
// let sum = obj['x'] + obj['y'] + obj['x'];
// console.log(sum);
// ==================103#4======================
// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);