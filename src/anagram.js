/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  const normalize = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return normalize(s1) === normalize(s2);
}

module.exports = anagram;
