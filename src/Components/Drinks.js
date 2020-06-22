import React, {Component} from 'react';
import '../Styling/PageStyle.css';
import allDrinks from '../Data/drinks.json';
import Card from './Card';
import Searcher from './Searcher';



class Drinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktails: []
        }
    }

        componentDidMount() {
            fetch({allDrinks})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        cocktails: result,
                    });
                    console.log(result);
                }
            )
            .catch(error => this.setState({error}));
        }

    render() {
        return (

            <div className="Card">
                <Searcher getCocktails={this.state} />
                <Card getCocktails={this.state} />
            </div>
        );
    }  
}
export default Drinks;
