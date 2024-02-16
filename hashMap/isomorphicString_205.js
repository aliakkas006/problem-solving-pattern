/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  const sToTMap = new Map(); // mapping from s to t
  const tToSMap = new Map(); // mapping from t to s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (sToTMap.has(charS)) {
      if (sToTMap.get(charS) !== charT) return false;
    } else {
      if (tToSMap.has(charT)) return false;
    }

    // Establish the mapping
    sToTMap.set(charS, charT);
    tToSMap.set(charT, charS);
  }

  return true;
};

console.log(isIsomorphic('egg', 'add'));
