// Only change code below this line
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
      	return fibonacci(num-1) + fibonacci(num - 2);
    }
}

function sumFibonacci(num) {
	
  var sum = 0;
  var i=1;
  var fibonacciN = fibonacci(i);
  while(fibonacciN<=num) {
  	if(fibonacciN%2==1) {
    	sum += fibonacciN;
    }
    i++;
  	fibonacciN = fibonacci(i);
  }
  return sum;
}
// Only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;