var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  if (s === t) return true;
  if (s.length > t.length) return false;
  if (s === t) return true;

  let subSeq = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[subSeq] === t[i]) {
      subSeq++;
    }
  }
  return subSeq === s.length ? true : false;
};

console.log(isSubsequence('b', 'c')); 
