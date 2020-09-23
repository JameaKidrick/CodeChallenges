const solution = (prices) => {
  let largest_profit = 0
  for(let i = 0; i <= prices.length-1; i++){
    for(let j = 1; j <= prices.length-1; j++){
      if(i > j){
        console.log(i, j, prices[i]-prices[j])
        let profit = prices[i]-prices[j]
        if(profit > largest_profit){
          largest_profit = profit
        }
      }
    }
  }
  return largest_profit
};

solution([6, 0, -1, 10])
// --> 11
solution([13, 10, 8, 4, 10])
// --> 6