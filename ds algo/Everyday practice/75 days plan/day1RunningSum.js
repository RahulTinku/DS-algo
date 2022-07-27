var runningSum = (num) => {
  //   const final = num.reduce((acc, curr, i) => {
  //     console.log(acc, curr);
  //     const total = i !== 0 ? acc[i - 1] + curr : curr;
  //     acc.push(total);
  //     return acc;
  //   }, []);

  //   console.log('final ', final);

  let total = 0;
  const final = nums.map((item) => {
    total = item + total;
    return total;
  });
  return final;
};

runningSum([3, 1, 2, 10, 1]);
