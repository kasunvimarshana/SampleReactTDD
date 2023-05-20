import React from 'react';
import {act, getAllByTestId, getNodeText, render} from '@testing-library/react';
import Homes from './Homes';
import apiClient from '../sevices/apiClient';
import bookingDialogService from '../sevices/bookingDialogService';

let container = null;

beforeEach(async () => {
    jest.spyOn(apiClient, 'getHomes').mockImplementation(() => {
        const homesDataPromise = Promise.resolve([
            {
              title: "Test home 1",
              image: "listing.jpg",
              location: "Test location 1",
              price: "1",
            },
            {
              title: "Test home 2",
              image: "listing.jpg",
              location: "Test location 2",
              price: "2",
            },
            {
              title: "Test home 3",
              image: "listing.jpg",
              location: "Test location 3",
              price: "3",
            }
        ]);
        return homesDataPromise;
    });
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

it('should show home title', () => {
    const homeTitles = getAllByTestId(container, 'home-title');
    expect(getNodeText(homeTitles[0])).toBe('Test home 1');
});

it('should show home image', () => {
    const homeImages = getAllByTestId(container, 'home-image');
    expect(homeImages[0]).toBeTruthy();
});

it('should show home location', () => {
    const homeLocations = getAllByTestId(container, 'home-location');
    expect(getNodeText(homeLocations[0])).toBe('Test location 1');
});

it('should show home price', () => {
    const homePrices = getAllByTestId(container, 'home-price');
    expect(getNodeText(homePrices[0])).toBe('$1/night');
});

it('should show home booking button', () => {
    const homeBookingButtons = getAllByTestId(container, 'home-booking-btn');
    expect(homeBookingButtons[0]).toBeTruthy();
});

it('should open home booking dialog when clicking button', () => {
    jest.spyOn(bookingDialogService, 'open').mockImplementation(() => {});
    const homeBookingButtons = getAllByTestId(container, 'home-booking-btn');
    homeBookingButtons[0].click();
    expect(bookingDialogService.open).toHaveBeenCalledWith({
        title: "Test home 1",
        image: "listing.jpg",
        location: "Test location 1",
        price: "1",
    });
});