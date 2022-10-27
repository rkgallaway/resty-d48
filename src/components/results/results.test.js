import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Results from './index';

describe('Results Component', () => {
  it('renders data props as expected', () => {
    let data = {
      banana: "banana"
    }
    render(<Results data={data} />);
    let pre = screen.getByTestId('results-pre');

    expect(pre).toHaveTextContent('banana');
  });

  it('renders no data as expected', () => {

    render(<Results />);
    let pre = screen.getByTestId('results-pre');

    expect(pre).toHaveTextContent('');
  });
});
