import { render } from '@testing-library/svelte';
import DataTable from '../../../src/components/DataTable.svelte';

const mockWords = [
  { word: 'test', type: 'noun', frequency: 10 },
  { word: 'word', type: 'noun', frequency: 5 }
];

test('DataTable renders table with words', () => {
  const { getByText, getAllByRole } = render(DataTable, { words: mockWords });

  expect(getByText('test')).toBeInTheDocument();
  expect(getByText('word')).toBeInTheDocument();
  expect(getByText('10')).toBeInTheDocument();
  expect(getByText('5')).toBeInTheDocument();

  const headers = getAllByRole('columnheader');
  expect(headers).toHaveLength(3);
  expect(headers[0]).toHaveTextContent('Word');
  expect(headers[2]).toHaveTextContent('Frequency');
});

test('DataTable sortable headers have correct class', () => {
  const { getByText } = render(DataTable, { words: mockWords });

  const wordHeader = getByText('Word');
  expect(wordHeader).toHaveClass('sortable');

  const freqHeader = getByText('Frequency');
  expect(freqHeader).toHaveClass('sortable');
});
