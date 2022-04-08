import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/app.scss';
import CoinsList from './components/CoinsList/CoinsList';
import CoinDisplayPage from './components/CoinDetails/CoinDisplayPage';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={CoinsList} />
          <Route path="/coinDisplayPage/:id" component={CoinDisplayPage} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
