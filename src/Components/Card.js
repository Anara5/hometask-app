import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
//import Preparation from "../Components/Preparation";
//import data from '../Data/drinks.json';


const Card = ({name, image}) => {

        return (
            <div className="drink-card">
                <p>Name: {name}</p>
                <Link to={`/preparation/`} id="searcher-link">
                <img style={{height: 150}, {width: 150}} src={image} alt="cocktail"/>
                </Link>

                <div>
                <Switch>
                <Route path="/explore/preparation">
                </Route>
                </Switch>
                </div>
            </div>
        )
    }
export default Card;