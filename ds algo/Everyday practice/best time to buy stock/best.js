/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      result += prices[i + 1] - prices[i];
    }
  }
  return result;
};

// Second method
var maxProfit = function(prices) {
    let min =prices[0], max = prices[0], len= prices.length, diff =0;
    
    for(let i=0; i< len; i++){
      if(min > prices[i]){
          min = prices[i];
          max = prices[i]
      }else{
          if(max < prices[i]){
              max = prices[i]
          }
      }
        diff = (max -min) > diff ? max-min : diff;
    }
    return diff
};
