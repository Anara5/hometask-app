import React from 'react';
import NavBar from '../Components/NavBar';

export default ({cocktail}) => (

    
    <div className="drink-details">

    <p>Ordinary Drink</p>

        <div>
        <h1>{cocktail.name}</h1>
        <p>{cocktail.preparation}</p>
        <img style={{height: 250, width: 250}} src={cocktail.image} alt="cocktail"/>
        </div>
        </div>
)