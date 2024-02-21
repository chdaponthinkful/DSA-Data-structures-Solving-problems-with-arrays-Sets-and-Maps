/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
      const groups = {};
    words.forEach(word => {
        const sorted = word.split('').sort().join('');
        if (!groups[sorted]) {
            groups[sorted] = [];
        }
        groups[sorted].push(word);
    });
    return Object.values(groups);
}

module.exports = anagramGroups;
