
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ValidationForm from '../ValidationForm';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<ValidationForm />', () => {
  it('renders the component and validates credit card', async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: { msg: 'Valid Card!' }
    });

    render(<ValidationForm />);

    const input = screen.getByPlaceholderText('Enter Credit Card Number');
    const validateButton = screen.getByText('Validate');

    fireEvent.change(input, { target: { value: '1234567812345678' } });
    fireEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByText('Valid Card!')).toBeInTheDocument();
    });
  });

  it('handles validation error', async () => {
    const errorMessage = 'Invalid Card!';
    mockedAxios.post.mockRejectedValueOnce({
      response: { data: { error: errorMessage } }
    });

    render(<ValidationForm />);

    const input = screen.getByPlaceholderText('Enter Credit Card Number');
    const validateButton = screen.getByText('Validate');

    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
  

});
