/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
     const charCount = {};
    for (let char of word.replace(/[^\w]/g, '').toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) oddCount++;
        if (oddCount > 1) return false;
    }
    return true;
}

module.exports = permutationPalindrome;
