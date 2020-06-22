import React from "react";
import { Link } from 'react-router-dom';


const Card = ({name, image}) => {

        return (
            <div className="drink-card">
                <p>{name}</p>
                <Link to={`/drinks/${name.toLowerCase()}`}>
                
                <img src={image} />
                </Link>
            </div>
        )
    }
export default Card;