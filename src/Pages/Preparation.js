import React from "react";
import NavBar from "../Components/NavBar";
import data from "../Data/drinks.json";
import NotFound from "../Components/NotFound";

const Preparation = (props) => {
  const cocktail = data.cocktails.filter(
    (cocktail) => cocktail.name === props.match.params.name
  )[0];

  return (
    <React.Fragment>
      {data.cocktails.filter(
        (cocktail) => cocktail.name === props.match.params.name
      ).length > 0 ? (
        <div className="Page">
          <header className="Header">
            <NavBar />
          </header>
          <div className="drink">
            <p>Ordinary Drink</p>
            <h2>{cocktail.name}</h2>
            <p>{cocktail.preparation}</p>
            <img
              style={{ height: 500, width: 500 }}
              src={cocktail.image}
              alt={cocktail.name}
            />
          </div>
        </div>
      ) : (
        <div>
          <NotFound />
        </div>
      )}
    </React.Fragment>
  );
};
export default Preparation;
