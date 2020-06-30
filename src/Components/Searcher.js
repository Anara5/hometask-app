import React, { useState } from "react";
import Card from "../Components/Card";
import data from "../Data/drinks.json";
import Preparation from "../Pages/Preparation";
import { Link } from "react-router-dom";
import _, { update } from "lodash";

const Searcher = () => {
  const [searchItem, setSearchItem] = useState("");
  const [item, setItem] = useState(data);
  const [newData, setnewData] = useState(data.cocktails);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = item.cocktails.filter(
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
      <div>
        {newData.length > 0 ? (
          newData.map((cocktail) => (
            <Card
              key={cocktail.name}
              name={cocktail.name}
              src={cocktail.image}
            />
          ))
        ) : (
          <div>Not found </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Searcher;
