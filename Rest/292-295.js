//293

function average(...numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce(function(sum, elem) {
        return sum + elem;
    }, 0) / numbers.length;
}

console.log(average(1, 2, 3, 4, 5)); 
console.log(average(10, 20, 30)); 
console.log(average()); 

//294

let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], 
//	[7, 8, 9] ] //unite сливает в двумерный массив merge в один массив


function unite(...arr) {
	return arr;
}


//295

let results = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(results);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

function merge(...arrs) {
	return [].concat(...arrs);
}