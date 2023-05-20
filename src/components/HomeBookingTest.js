import React from 'react';
import {getByTestId, render} from '@testing-library/react';
import HomeBooking from './HomeBooking';

let container = null;

const mockedHome = {
  title: "Test home 1",
  image: "listing.jpg",
  location: "Test location 1",
  price: "1",
};

beforeEach(() => {

  container = render(<HomeBooking home={ mockedHome } />).container;

});

it('test', () => {
    expect(true).toBe(true);
});

