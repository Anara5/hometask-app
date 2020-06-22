import React from 'react';
import data from '../Data/drinks.json';
import CardFullInformation from '../Components/CardFullInformation';

const Preparation = () => {

    return (
        <div>
        {
            data.cocktails.map((cocktail, name) => {
                return (
                    <CardFullInformation 
                    key={name}
                    name={cocktail.name}
                    preparation={cocktail.preparation}
                    image={cocktail.image}
                    />
                )
            })
        }
        </div>
    )


}
export default Preparation;