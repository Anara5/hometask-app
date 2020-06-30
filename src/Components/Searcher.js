import React from 'react';
import Card from '../Components/Card';
import data from '../Data/drinks.json';
import Preparation from '../Pages/Preparation';
import { Link } from 'react-router-dom';
import _ from 'lodash';

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
            show: null,
        };
        this.clickMe = this.clickMe.bind(this);
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value.substr(0, 20)});
        console.log('no')
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.search);
    };
    
    clickMe = show => {
        console.log(show);
        this.setState({show})
        }

    render() {

        const {search, data} = this.state;

        const messageShow = () => {
            
            if (search === false) {
                return <p>not found</p>;
            }
        }
        

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

                {messageShow()}

                <div className="container">
                {this.state.show ? <Preparation cocktail={this.state.show} /> : null}
                </div>
               

                <div>
                { data.cocktails.filter(searchingFor(search)).map((cocktail, i) => {
                        return (
                            <Link to="/explore/preparation" onClick={this.clickMe.bind(this, cocktail)}>
                            <Card
                            key={i}
                            name={cocktail.name}
                            preparation={cocktail.preparation}
                            src={cocktail.image}              
                            />
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}