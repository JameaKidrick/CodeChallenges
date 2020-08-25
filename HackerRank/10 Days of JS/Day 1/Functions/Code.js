function factorial(n) {
  let total = n

  for(let i = 1; i < n; i++){
    total *= i
  }

  return total
}