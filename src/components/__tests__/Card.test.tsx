import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

test('renders children', () => {
  const { container, getByText } = render(<Card><span>This is a card</span></Card>);
  const child = getByText('This is a card');
  expect(container).toContainElement(child);
});