import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from 'pages/main';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/환영합니다. 워드러/i);
  expect(linkElement).toBeInTheDocument();
});
