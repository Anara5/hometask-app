import React from "react";
import Card from "../Components/Card";
import data from "../Data/drinks.json";
import { Link } from "react-router-dom";
import _ from "lodash";

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
            show: null
        };
        this.clickMe = this.clickMe.bind(this);
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value.substr(0, 20)});
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState(this.state.seach)
    };

    
    clickMe = show => {
        this.setState({show})
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

                <div>
                { data.cocktails.filter(searchingFor(search)).length===0 && <p>The drink is not found / no result</p> }  
                
                { data.cocktails.filter(searchingFor(search)).map((cocktail, name) => {
                        return (
                            
                            <Link to={`/preparation/${cocktail.name}`} onClick={this.clickMe.bind(this, cocktail)}>
                            <Card
                            key={name}
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

/*
<div className="container">
                {this.state.show ? <Preparation cocktail={this.state.show} /> : null}
                </div>
                */