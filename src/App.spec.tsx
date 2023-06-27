import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('App should render', () => {
    render(<App />);
  });
});
