import React from 'react';
import NavBar from '../Components/NavBar';
import Searcher from '../Components/Drinks';

const Explore = props => {

    const title = 'Find your favourite drink!';

    return (
    <div className="Page">
        <header className="Header">
            <NavBar />
        </header>

        <div className="Explore">
            <h1 id="titleExplorer">{title}</h1>

           <Searcher />
            
        </div>
    </div>
    )
}
export default Explore;