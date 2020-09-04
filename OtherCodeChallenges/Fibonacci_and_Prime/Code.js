let numbers = []
let prime = []

const solution = (n) => {
  for(let i = 1; i <= n; i++){
    numbers.push(fibonacci(i))
  }
  numbers.map(number => {
    checkPrime(number)
  })
  return prime
};

const fibonacci = (n) => {
    if(n === 0){
      return 0
    }else if(n === 1){
      return 1
    }else{
      return fibonacci(n-1) + fibonacci(n-2)
    }
}

const checkPrime = n => {
  let primeNumber = true
  if(n > 1){
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(i !== n){
        console.log(n, i)
        if(n % i === 0){
          console.log(n, i)
          primeNumber = false
        }
      }
    }
  }else{
    primeNumber = false
  }

  if(primeNumber === true){
    prime.push(n)
  }
}

console.log(solution(8))