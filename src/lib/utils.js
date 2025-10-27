/**
 * Filters an array of words based on a search query.
 * Performs case-insensitive search on the word text.
 * @param {Array} words - Array of word objects with 'word' property
 * @param {string} query - Search query string
 * @returns {Array} Filtered array of words
 */
export function filterWords(words, query) {
  if (!query || query.trim() === '') {
    return words;
  }
  const lowerQuery = query.toLowerCase();
  return words.filter(word => word.word.toLowerCase().includes(lowerQuery));
}