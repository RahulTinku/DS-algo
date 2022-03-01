/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let i = 0;
  t = t.split('');
  while (i < s.length) {
    const index = t.indexOf(s[i]);
    if (index !== -1) {
      t.splice(index, 1);
    } else {
      return false;
    }
    i++;
  }
  return true;
};
