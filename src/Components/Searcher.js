import React, {useState, useEffect} from 'react';
import Card from '../Components/Card';
import data from '../Data/drinks.json';
import { generatePath } from 'react-router-dom';

const Searcher = () => {


    
        return (
            <div className="search">
                <form>
                    <div>
                        <input type="text" id="form"></input>
                        <button>Search</button>
                    </div>

                    <div></div>
                </form>
            </div>
        );
    
}
export default Searcher;