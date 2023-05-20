import React from 'react';
import {act, getAllByTestId, render} from '@testing-library/react';
import Homes from './Homes';

let container = null;

beforeEach(async () => {
    container = render(<Homes/>).container;
    await act(async () => {});
});

it('test', () => {
    expect(true).toBe(true);
});

it('should show homes', () => {
    const homes = getAllByTestId(container, 'home');
    expect(homes.length).toBeGreaterThan(0);
});