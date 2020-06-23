import React from 'react';
import Card from '../Components/Card';
import data from '../Data/drinks.json';

function searchingFor(search) {
    return function(drinks) {
        return drinks.name.toLowerCase().includes(search.toLowerCase()) || !search;
    }
}

export default class Searcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: data
        };
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value.substr(0, 20)});
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.search)
    };

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
                
                <div>
                { data.cocktails.filter(searchingFor(search)).map((cocktail) => {
                        return (
                            <Card 
                            key={cocktail.name}
                            name={cocktail.name}
                            src={cocktail.image}                    
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}