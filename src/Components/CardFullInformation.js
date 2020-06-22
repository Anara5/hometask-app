import React from "react";

const CardFullInformation = ({name, preparation, image}) => {

        return (
            <div className="drink-card">
                <p>Name: {name}</p>
                <h5>Preparation</h5>
                <p>{preparation}</p>
                <img style={{height: 300}, {width: 300}} src={image} alt="cocktail"/>
            </div>
        )
    }
export default CardFullInformation;