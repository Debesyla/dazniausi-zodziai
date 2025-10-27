import type { Word } from './data';

/**
 * Filters an array of words based on a search query.
 * Performs case-insensitive search on the word text.
 * @param words - Array of word objects
 * @param query - Search query string
 * @returns Filtered array of words
 */
export function filterWords(words: Word[], query: string): Word[] {
  if (!query || query.trim() === '') {
    return words;
  }
  const lowerQuery = query.toLowerCase();
  return words.filter(word => word.word.toLowerCase().includes(lowerQuery));
}