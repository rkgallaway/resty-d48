import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from'./index';

describe('From Component', () => {
  it('calls the handleApi function', () => {
    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    let button = screen.getByText('GO!');
    fireEvent.click(button);

    expect(handleApiCall).toHaveBeenCalled();
  });
  it('calls the handleApi function with expected parameters', () => {
    let expectedParams = {
      method: 'get', 
      url:'https://pokeapi.co/api/v2/pokemon', 
      data: 'some test json',
    };

    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    let getSpan = screen.getByText('GET');
    let textarea = screen.getByTestId('form-textarea');
    let urlInput = screen.getByTestId('form-url');

    fireEvent.click(getSpan);
    fireEvent.change(textarea, {target: {value: 'some test json'}});
    fireEvent.change(urlInput, {target: {value: 'https://pokeapi.co/api/v2/pokemon'}});
    let button = screen.getByText('GO!');
    fireEvent.click(button);

    expect(handleApiCall).toHaveBeenCalledWith(expectedParams);
  })
 
});
