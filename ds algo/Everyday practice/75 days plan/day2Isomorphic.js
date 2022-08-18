//  leetcode 205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (
      s.indexOf(s[i]) !== s.lastIndexOf(s[i]) ||
      t.indexOf(t[i]) !== t.lastIndexOf(t[i])
    ) {
      if (t.lastIndexOf(t[i]) !== s.lastIndexOf(s[i])) return false;
    }
  }
  return true;
};

console.log(isIsomorphic('egg', 'add'));
