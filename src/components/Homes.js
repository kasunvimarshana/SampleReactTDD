import React, {useState, useEffect} from 'react';
import apiClient from '../sevices/apiClient';

export default function Homes() {
    const [homesState, setHomesState] = useState([]);

    useEffect(() => {
        const homesDataPromise = apiClient.getHomes();

        homesDataPromise.then(homesData => setHomesState(homesData));
    }, []);

    let homes;

    homes = homesState.map((home, index) => {
        return (
            <div data-testid="home" key={ index }>
                <div data-testid="home-title">{home.title}</div>
                <img data-testid="home-image" src={home.image} alt={home.title}/>
                <div data-testid="home-location">{home.location}</div>
                <div data-testid="home-price">{home.price}</div>
            </div>
        );
    });
      
    return (
        <div>
            {homes}
        </div>
    );
};