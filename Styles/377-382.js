//380-381
const text = document.getElementById('text');

let button3 = document.getElementById('line');
button3.addEventListener('click',function(){
    text.classList.toggle('line');
})

let button4 = document.getElementById('bold');
button4.addEventListener('click',function(){
    text.classList.toggle('bold');
})

let button5 = document.getElementById('red');
button5.addEventListener('click',function(){
    text.classList.toggle('red');
})

//382


let button6 = document.querySelector('#button6');
let elem6 = document.querySelector('#elem6');

button6.addEventListener('click', function() {
	elem6.classList.toggle('active');
});