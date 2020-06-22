import React, {useState, useEffect} from 'react';
import Card from '../Components/Card';
import data from '../Data/drinks.json';
//import axios from 'axios';

class Searcher extends React.Component {

   state = {
       search: ""
   };

    onchange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        /*
        const {search} = this.state;
        const filteredDrinks = data.filter(cocktail => {
            return cocktail.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        */

        return(
            <div className="search">
                <form>
                    <div>
                        <input type="text" id="input" onChange={this.onchange}></input>
                        <button>Search</button>
                    </div>
                </form>
                
                <div>
                
                {
                    data.cocktails.map((cocktail, name) => {
                        return (
                            <Card 
                            key={name}
                            name={cocktail.name}
                            image={cocktail.image}                            
                            />
                        )
                    })
                }
                </div>
            </div>
        );
    }
}
export default Searcher;

//onChange={e => setSearch(e.target.value)}