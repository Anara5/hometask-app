import React from "react";
import { Link } from 'react-router-dom';


const Card = ({name, src}) => {

        return (
            <div className="drink-card">
                <p>Name: {name}</p>
                <Link to="/preparation">
                <img style={{height: 150, width: 150}} src={src} alt="cocktail" />
                
                </Link>
                
            </div>
        )
    }
export default Card;