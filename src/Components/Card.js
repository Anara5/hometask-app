import React from "react";
import { Link } from 'react-router-dom';
import Preparation from "./Preparation";


const Card = ({name, src}) => {

        return (
            <div className="drink-card">
                <p>Name: {name}</p>
                <img style={{height: 150, width: 150}} src={src} alt="cocktail" />
            </div>
        )
    }
export default Card;