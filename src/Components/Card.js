import React, {Component} from "react";


class Card extends Component {
    render() {
        const {cocktails} = this.props.getCocktails;


        return (
            <div>
            {cocktails.map((cocktail, index) => (
                <div key={index}>
                    <div {...cocktail}>
                        <p>{cocktail.name}</p>
                        <img {...cocktail.image}></img>
                        <p>{cocktail.preparation}</p>
                    </div>
                </div>
            ))}
            </div>
        )
    }
}
export default Card;