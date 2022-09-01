/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  /**
   * loop through string and find no of occurance of each word
   * if(occurance is >= 2 ) then they can build palindrom
   * total palindrom = no of occurance +1
   */
  const set = new Set();
  let count = 0;

  for (const char of s) {
    if (set.has(char)) {
      count += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  return count + (set.size > 0 ? 1 : 0);
};

console.log(longestPalindrome('abccccdd')); 
