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
