import React from 'react';
import NavBar from '../Components/NavBar';
import image from '../Images/doodle-sketch-cocktails.jpg';

const Home = () => {

    const title = 'Welcome to the Cocktail Explorer!';

    return (

    <div className="Page">
        <header className="Header">
            <NavBar />
        </header>

        <div className="Home">

            <h1 id="titleHome">{title}</h1>

            <img src={image} alt="HomepageImage" />

        </div>
        
    </div>
    );
}
export default Home;