import React from "react";

const Card = ({name, src}) => {

        return (
            <div className="drink-card">
                <p>Name: {name}</p>
                <img style={{height: 150, width: 150}} src={src} alt="cocktail" />
            </div>
        )
    }
export default Card;