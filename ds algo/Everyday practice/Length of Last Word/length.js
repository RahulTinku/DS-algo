/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const k = s.replace(/\s+/g, '-').split('-');
  return k[k.length - 1].length === 0
    ? k[k.length - 2].length
    : k[k.length - 1].length;
  // const n = s.trim().split(' ')
  // return n[n.length -1].length
  // const n = s.split(' ').filter(item => item !== '');
  // return n[n.length-1].length
};
