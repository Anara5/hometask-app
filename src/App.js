import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Explore from './Pages/Explore';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact={true} title="home" component={Home} />
        <Route path="/explore" title="explore" component={Explore} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
