function sherlockAndAnagrams(s) {
  const ans = new Map();
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let item = s.substring(i, j);
      item = item.split('').sort().join();
      ans.set(item, ans.get(item) ? ans.get(item) + 1 : 1);
    }
  }
  let count = 0;
  for (let a of ans.values()) {
    if (a > 1) {
      count += (a * (a - 1)) / 2;
    }
  }
  return count;
}
