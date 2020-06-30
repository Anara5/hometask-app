import React from 'react';
import NavBar from '../Components/NavBar';
import data from '../Data/drinks.json';

/*
const Preparation = (cocktail) => {
     
    return (
        
        <div className="drink-details">
        <NavBar />
        
        <p>Name: {cocktail.name}</p>
        <p>Preparation</p>
        <p>{cocktail.preparation}</p>
        <img style={{height: 300, width: 300}} src={cocktail.image} alt="cocktail"/>
        </div>
        
    )
}
export default Preparation;
*/

export default ({cocktail}) => (
    
    <div className="drink-details">
        
        <p>Name: {cocktail.name}</p>
        <p>Preparation</p>
        <p>{cocktail.preparation}</p>
        <img style={{height: 300, width: 300}} src={cocktail.image} alt="cocktail"/>
        </div>
        
)