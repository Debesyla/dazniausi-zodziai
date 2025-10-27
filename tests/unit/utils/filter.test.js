import { filterWords } from '../../../src/lib/utils.js';

test('filterWords returns all words when query is empty', () => {
  const words = [
    { word: 'labas', frequency: 10 },
    { word: 'rytas', frequency: 5 }
  ];
  expect(filterWords(words, '')).toEqual(words);
});

test('filterWords performs case-insensitive search', () => {
  const words = [
    { word: 'Labas', frequency: 10 },
    { word: 'rytas', frequency: 5 }
  ];
  expect(filterWords(words, 'labas')).toEqual([{ word: 'Labas', frequency: 10 }]);
});

test('filterWords filters by partial match', () => {
  const words = [
    { word: 'labas', frequency: 10 },
    { word: 'rytas', frequency: 5 },
    { word: 'labai', frequency: 3 }
  ];
  expect(filterWords(words, 'la')).toEqual([
    { word: 'labas', frequency: 10 },
    { word: 'labai', frequency: 3 }
  ]);
});

test('filterWords returns empty array when no matches', () => {
  const words = [
    { word: 'labas', frequency: 10 },
    { word: 'rytas', frequency: 5 }
  ];
  expect(filterWords(words, 'xyz')).toEqual([]);
});