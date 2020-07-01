import React, { useState } from "react";
import Card from "../Components/Card";
import data from "../Data/drinks.json";
import { Link } from "react-router-dom";

const Searcher = () => {
  const [searchItem, setSearchItem] = useState("");
  const [newData, setnewData] = useState(data.cocktails);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = data.cocktails.filter(
      (search) => search.name.toLowerCase() === searchItem.toLowerCase()
    );
    setnewData(found);
  };

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="search" />
      </form>
      <div className="cards">
        {newData.length > 0 ? (
          newData.map((cocktail) => (
            <Link to={`/preparation/${cocktail.name}`} key={cocktail.name}>
              <Card
                key={cocktail.name}
                name={cocktail.name}
                src={cocktail.image}
              />
            </Link>
          ))
        ) : (
          <div>Not found </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Searcher;
