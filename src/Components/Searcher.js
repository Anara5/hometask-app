import React from 'react';
import Card from '../Components/Card';
import data from '../Data/drinks.json';
import Preparation from './Preparation';

function searchingFor(search) {
    return function(cocktails) {
        return cocktails.name.toLowerCase().includes(search.toLowerCase()) || !search;
    }
}

export default class Searcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: data,
            visible: false
        };
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value.substr(0, 20)});
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.search)
    };

    clickMe (cocktail) {
        console.log(cocktail);
    }

    render() {

        const {search, data} = this.state;

        return (
            <div className="search">
            
                <form onSubmit={e => this.onSubmit(e)}>
                    <div>
                        <input type="text"
                        id="input" 
                        value={search}
                        onChange={this.updateSearch.bind(this)}></input>
                        <button>Search</button>
                    </div>
                </form>
            {this.state.visible ? <Preparation /> : null}    
                <div>
                { data.cocktails.filter(searchingFor(search)).map((cocktail) => {
                        return (
                            <a onClick={this.clickMe.bind(this, cocktail)}>
                            <Card 
                            key={cocktail.name}
                            name={cocktail.name}
                            src={cocktail.image}                    
                            />
                            </a>
                        )
                    })}
                </div>
            </div>
        );
    }
}