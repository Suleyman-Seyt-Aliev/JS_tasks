//311
console.log('-------------------------------------311');

function day() {
	return (new Date).getDate();
}
function month(){
    return (new Date).getMonth()+1;
}
function year(){
    return (new Date).getFullYear();
}
console.log(day());
console.log(month());
console.log(year());

let date = new Date();

console.log('часы ' + date.getHours());    // часы
console.log('минуты ' + date.getMinutes());  // минуты
console.log('секунды ' + date.getSeconds()); // секунды

//312
console.log('-------------------------------------312');

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

let data = new Date();

console.log(
	addZero(data.getFullYear()) + '-' + 
	addZero(data.getMonth() + 1) + '-' +
	addZero(data.getDate())
);

console.log(
	addZero(data.getHours()) + ':' + 
	addZero(data.getMinutes() + 1) + ':' +
	addZero(data.getSeconds())
);

//313

console.log('-------------------------------------313');

let str = addZero(data.getFullYear()) + '-' + 
addZero(data.getMonth() + 1) + '-' +
addZero(data.getDate());

let res = str.split('-').reverse().join('.');
console.log(res)



//314
console.log('-------------------------------------314');
let date2 = new Date();
console.log('1. ' + date2.getDay());

if(date2.getDay>5 || date2.getDay()<1){
	console.log('2. выходной')
}else{
	console.log('2. рабочий день')
}

console.log('3. '+ (7-date2.getDay()))

//315 

console.log('-------------------------------------315');
let manth = new Date();
let month2  = manth.getMonth();

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноябрь', 'декабрь'
];

console.log(months[month2])

//316

console.log('-------------------------------------316');

let datas = new Date(2006, 7, 3); 
let day1  = datas.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day1]);


//317
console.log('-------------------------------------317');


let date3 = new Date(2025, 1, 1, 0,0, 0);//new Date(год, месяц, день, часы, минуты, секунды, миллисекунды)
console.log(date3.getTime() + ' секунд');

console.log('-------------------------------------318');


//318

let january = new Date(2000, 0, 10, 0,0, 0);

let march = new Date(1998, 2, 1, 0,0, 0);

let diff = january.getTime() - march.getTime()

console.log((diff/ (1000 * 60 * 60 * 24)+ ' дней'))

let now = new Date()
let bday = new Date(2006, 7, 3);
let different = now.getTime() - bday.getTime();
console.log(Math.floor(different/(1000 * 60 * 60 * 24))+ ' дней')

console.log('-------------------------------------319');

//319

let date319 = new Date(2010, 1, 15, 0, 0, 0);

let date319_1 = new Date(2000, 8, 1, 0, 0, 0);

let differ = date319 - date319_1

console.log((differ + ' миллисекунд'))
console.log(Math.floor(differ/ (1000 * 60 * 60 * 24))+ ' дней')
console.log(Math.floor(differ/ (1000 * 60 * 60 * 24 * 30.41 ))+ ' месяцев')
console.log(Math.floor(differ/ (1000 * 60 * 60 * 24 * 30.41 * 12))+ ' лет')


console.log('-------------------------------------320');

//320


//1


let date4 = new Date(2018, 1, 35); //4 февраля 2018
console.log(date4); // какая дата будет?
//2


let date5 = new Date(2018, 15, 1); //1 февраля 2019
console.log(date5); // какая дата будет?
//3


let date6 = new Date(2018, 3, 31);//1 мая 2018
console.log(date6); // какая дата будет?
//4


let date7 = new Date(2018, 1, 31);//3 марта
console.log(date7); // какая дата будет?
//5


let date8 = new Date(2018, 12, 33); //2 февраля
console.log(date8); // какая дата будет?
//6


let date9 = new Date(2018, 33, 33);
console.log(date9); // какая дата будет? 2020 2 ноября
//7


let date10 = new Date(2018, 5, 0);
console.log(date10); // какая дата будет? 31 мая 2018
//8


let date11 = new Date(2018, 0, 0);
console.log(date11); // какая дата будет? 31 декабря 2017
//9


let date12 = new Date(2018, -12, -33);
console.log(date12); // какая дата будет? 28 ноября 2016
//10


let date13 = new Date(2018, 0, 1, 23, 0, 60);
console.log(date13); // какая дата будет? 23:01:00 2018 год 1 января

//11


let date14 = new Date(2018, 0, 1, 23, 60, 0);
console.log(date14); // какая дата будет? 2 января 2018 00:00:00
//12


let date15 = new Date(2018, 0, 1, 100, 100, 100);
console.log(date15); // какая дата будет? 5 января 2018 05:41:40


//321
console.log('-------------------------------------321');
console.log('-------------------------------------321');
console.log('-------------------------------------321');

function LastDayOfMonth(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
}


let lastDay = LastDayOfMonth(2020, 3);
console.log('lastDay: ' + lastDay); 

let five = new Date(2025, 4, 0);
let dayin  = datas.getDay();
let daysis = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(daysis[dayin])


//322

console.log('-------------------------------------322');

let febr = new Date(2024, 2, 0);
function isLeap(data){
   if(data.getDate()>28)
{
	return true;
}else{
	return false;
}

}

console.log(isLeap(febr));

//323

console.log('-------------------------------------323');

let year3 = 2024, month3 = 20, day3 = 10;
let dates = new Date(year3 , month3 , day3);
function Check(data, year, month, day){
   if(data.getFullYear() == year && data.getMonth() == month && data.getDate() == day)
{
	return true;
}else{
	return false;
}

}


console.log(Check(dates, year3 , month3 , day3 ));

//324

console.log('-------------------------------------324');
let nows  = new Date(); // получаем текущий момент
let dats = new Date(nows.getFullYear(), 11, 31); // получаем нашу дату
console.log(dats.getDay());
let das = dats.getDay();
let daysiss = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(daysis[das])


//325 
console.log('-------------------------------------325');
let news = new Date();

let datis = new Date(now.getFullYear(), news.getMonth() - 1, 10);
console.log(daysis[datis.getDay()])

//326
console.log('-------------------------------------326');
let jan  = new Date();
let date326 = new Date(jan.getFullYear() + 1, 11, 31);
let daysisis = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(daysisis[date326.getDay()]);
let date326_2 = new Date(jan.getFullYear() + 1, 10, 11);
console.log(daysisis[date326_2.getDay()]);
let date326_3 = new Date(jan.getFullYear() - 1, 10, 11);
console.log(daysisis[date326_3.getDay()]);


//327
console.log('-------------------------------------327');

let date_1 = new Date(2024, 0, 1);
let date_2 = new Date(2024, 8, 10);

console.log((date_2 - date_1)/(1000*60*60*24));

let date_11 = new Date(2024, 10, 11);
let date_22 = new Date(2024, 11, 10);

console.log((date_22 - date_11)/(1000*60*60*24));


//328
console.log('-------------------------------------328');

let now328  = new Date(2024, 10, 10);
let date328 = new Date(now328.getFullYear(), now328.getMonth(), now328.getDate(), 12);

let now328_1 = new Date();
let date328_1 = new Date(now328_1.getFullYear(), now328_1.getMonth(), now328_1.getDate(), now328_1.getHours(), now328_1.getMinutes());
console.log((date328_1-date328)/(1000*60*60));

//329
console.log('-------------------------------------329');

let now329  = new Date(2024, 10, 11);
let date329 = new Date(now329.getFullYear(), now329.getMonth(), now329.getDate());

let now329_1 = new Date();
let date329_1 = new Date(now329_1.getFullYear(), now329_1.getMonth(), now329_1.getDate(), now329_1.getHours(), now329_1.getMinutes());
console.log((date329_1-date329)/(1000*60*60));

//330
console.log('-------------------------------------330');

let now330  = new Date();
let date330 = new Date(now330.getFullYear(), now330.getMonth(), now330.getDate(), now330.getHours(), now330.getMinutes());

let now330_1 = new Date(2024,10,12);
let date330_1 = new Date(now330_1.getFullYear(), now330_1.getMonth(), now330_1.getDate());
console.log((date330_1-date330)/(1000*60*60));

//331
console.log('-------------------------------------331');

let yea = 2000;
let mon = 0;
let dau = 1;
let data2000 = new Date(yea, mon, dau);
let sum = 0;

for(let year = 2000; year < 2025; year++){
    yea++;
	data2000 = new Date(yea, mon, dau);
   if((data2000.getDay()==0 || data2000.getDay()==6)){
     sum++;
   }
}
console.log(sum)

///332
console.log('-------------------------------------332');
//1
let segodnya = new Date(2024, 10, 11, 0, 0, 0);

let seychas = new Date();
//2

console.log(( seychas - segodnya )/(1000))

let zavtra = new Date(2024, 10, 12, 0, 0, 0);

let shas = new Date();
console.log(( zavtra - shas )/(1000))

//3

let sevodnya = new Date(2024, 10, 11); 
let now_god = new Date(2024, 11, 31);

let difference = now_god - sevodnya; // Разница в миллисекундах
let differenceday = difference / (1000 * 60 * 60*24); 

console.log(differenceday);

//4 

let yea1 = 2024; 
let sum1 = 0; 

for (let month = 0; month < 12; month++) { 
    for (let day = 1; day <= 31; day++) { 
        let data2024 = new Date(yea1, month, day); 
        if (day === 13 && data2024.getDay() === 5) { 
            sum1++; 
        } 
    } 
} 

console.log(sum1);
//количество пятниц 13
//5
let currentdate = new Date();
let cur = new Date( currentdate.setMonth(currentdate.getMonth()-13))//(от нынешего года отняли 13 месяцев)

console.log(cur.getFullYear())

//потом 6-9
let currentDate = new Date();
let lastDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
let list = lastDays;
daysisis = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(daysisis[list.getDay()]);

//7
let currentYear = new Date().getFullYear();

let isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

console.log(isLeapYear(currentYear));


///333
console.log('-------------------------------------333');
let date111 = '2020-11-31';
let date222 = '2020-12-01';
console.log(date111>date222);

//334
let date1111 = '09-21';
let date2222 = '09-23';
console.log('-------------------------------------334');

console.log(date1111>date2222);

//335
let dat = '10-10'; // Пример даты

console.log('-------------------------------------335');

function zodiak(date) {
    const [day, month] = date.split('-').map(Number);
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
        return 'Овен (21 марта – 20 апреля)';
    } 
    if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
        return 'Телец (21 апреля – 20 мая)';
    } 
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        return 'Близнецы (21 мая – 21 июня)';
    } 
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return 'Рак (22 июня – 22 июля)';
    } 
    if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
        return 'Лев (23 июля – 23 августа)';
    } 
    if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
        return 'Дева (24 августа – 23 сентября)';
    } 
    if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
        return 'Весы (24 сентября – 23 октября)';
    } 
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
        return 'Скорпион (24 октября – 22 ноября)';
    } 
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
        return 'Стрелец (23 ноября – 21 декабря)';
    } 
    if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
        return 'Козерог (22 декабря – 20 января)';
    } 
    if ((month === 1 && day >= 21) || (month === 2 && day <= 20)) {
        return 'Водолей (21 января – 20 февраля)';
    } 
    if ((month === 2 && day >= 21) || (month === 3 && day <= 20)) {
        return 'Рыбы (21 февраля – 20 марта)';
    }
}

console.log(zodiak(dat));


//336

console.log('-------------------------------------336');
let date3361 = new Date(2024, 10, 11, 12);
let date3362 = new Date();

console.log(date3362 > date3361);
if(date3362 > date3361==true){
	console.log('полдень был')
} else{
	console.log('полдень не был')
}


let date3363 = new Date(2024, 10, 15);
if(date3363 > date3361==true){
	console.log('пол месяца не прошло')
} else{
	console.log('пол месяца прошло')
}