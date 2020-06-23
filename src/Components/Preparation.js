import React from 'react';

const Preparation = (drink) => {

    return (
        
        <div className="drink-details">
        <p>Name: {drink.name}</p>
        <p>Preparation</p>
        <p>{drink.preparation}</p>
        <img style={{height: 300, width: 300}} src={drink.image} alt="cocktail"/>
        </div>
    )
}
export default Preparation;