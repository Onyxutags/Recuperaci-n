//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.//
//map//
var numbers = [1, 2, 3, 4];
var doubles = numbers.map(function(x) {
   return x * 2;
});

var numbers = [2, 4, 6];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});

//finter//
const words = ['rana', 'camaleon', 'mosquito', 'hormiga', 'mosco', 'escarabajo'];

const result = words.filter(word => word.length > 6);

console.log(result);


//reduce//
var total = [1, 2, 3, 4].reduce(function(a, b){ return a + b; });

//findlndex//

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start < 1) {
        return false;
      } else {
        start++;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
