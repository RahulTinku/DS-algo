/**
 * @param {number} n
 * @return {number}
 */
 const memo =new Map()
 memo.set(0,0)
 memo.set(1,1)
 var fib = function(n) {
     if(memo.has(n)) return memo.get(n)
     if(n === 0) return 0;
     if(n === 1) return 1;
     
     const fibo = fib(n-1)+ fib(n-2);
     memo.set(n,fibo)
     return fibo;
      
 };

 console.log(fib(10))