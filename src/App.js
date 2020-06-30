import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Preparation from './Pages/Preparation';
import NotFound from './Components/NotFound';

const App = () => {

  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact={true} title="home" component={Home} />
        <Route path="/explore" title="explore" component={Explore} />
        <Route path="/preparation/:name" title="preparation" component={Preparation} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;