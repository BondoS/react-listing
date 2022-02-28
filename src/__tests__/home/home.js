import React from 'react';
import user from '@testing-library/user-event';
import { screen, waitFor, fireEvent, within } from '@testing-library/react';
import { render } from '../../../test-utils';
import HomePg from '../../pages/public/home';
import { axe } from 'jest-axe';

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

test('Accessible filter form', async () => {
  const form = screen.getByTestId('filter-form');
  const results = await axe(form);
  expect(results).toHaveNoViolations();
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

test('Filter hotels by distance from venue less than 500', async () => {
  const distanceOptionsInput = screen.getByRole('combobox', {
    name: /distance/i,
  });
  // value 1 = lessThan500 meter
  fireEvent.change(distanceOptionsInput, { target: { value: 1 } });

  // Make sure that it is selected
  expect(
    screen.getByRole('option', { name: 'lessThan500' }).selected
  ).toBeTruthy();

  // Click on submit filter button
  const submitFilterButton = screen.getByTestId('submit-filter');
  user.click(submitFilterButton);

  // Wait for the hotels to load after filtering
  await waitFor(async () => {
    const resultHotels = await screen.findAllByTestId('hotel');
    // More than one hotel should be visible
    expect(resultHotels.length).toBeGreaterThan(1);
    // Each visible hotel should have distance from venue less than 500 meters
    resultHotels.forEach((hotel) => {
      expect(
        Number(within(hotel).getByTestId('hotel-distance').textContent)
      ).toBeLessThanOrEqual(500);
    });
  });
});
