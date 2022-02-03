/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const arrA = a.split('').reverse();
  const arrB = b.split('').reverse();
  let carry = 0;
  let answer = [];
  let index = 0;
  const len = a.length > b.length ? a.length : b.length;

  while (index < len) {
    const x = arrA[index] ? +arrA[index] : 0;
    const y = arrB[index] ? +arrB[index] : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 2);
    answer.unshift(sum % 2);
    index++;
  }

  if (carry > 0) answer.unshift(carry);

  return answer.join('');
};
