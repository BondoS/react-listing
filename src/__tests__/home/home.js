import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../../test-utils';
import HomePg from '../../pages/public/home';

beforeEach(() => render(<HomePg />));

test('Renders filters', async () => {
  const filterHeaderTxt = await screen.findByTestId('filter-header');
  expect(filterHeaderTxt).toBeInTheDocument();
  expect(screen.getByLabelText('distance')).toBeInTheDocument();
  expect(
    screen.getByRole('combobox', {
      name: 'priceCategory',
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('combobox', {
      name: 'rating',
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('checkbox', {
      name: 'free_wifi',
    })
  ).toBeInTheDocument();
});

test('Renders sort with more than 1 option', async () => {
  const sortSelectOptions = await screen.findByRole('combobox', {
    name: /sort/i,
  });
  expect(sortSelectOptions).toBeInTheDocument();
  expect(sortSelectOptions.length).toBeGreaterThan(1);
});

test('Renders hotels', async () => {
  await waitFor(() => {
    expect(screen.getAllByTestId('hotel').length).toBeGreaterThan(1);
  });
});
