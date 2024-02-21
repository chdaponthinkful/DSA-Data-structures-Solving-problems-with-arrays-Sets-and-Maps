/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
     const charCount = {};
    for (let char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of word) {
        if (charCount[char] === 1) return char;
    }
    return null;
}

module.exports = firstSingleCharacter;
