import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = props => {
    return (
    <div>
        <div>
        <nav className="navigation">
            <NavLink className="navlink" to="/" exact={true}>Home</NavLink>
            <NavLink className="navlink" to="/explore" exact={true}>Explore</NavLink>
        </nav>
        </div>
    </div>
    );
}
export default NavBar;