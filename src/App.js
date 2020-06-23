import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import NotFound from './Components/NotFound';
import Preparation from './Components/Preparation';

const App = () => {

  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact={true} title="home" component={Home} />
        <Route path="/explore" title="explore" component={Explore} />
        <Route path="/" title="notFound" component={NotFound} />
        <Route path="/preparation" title="preparation" component={Preparation} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;