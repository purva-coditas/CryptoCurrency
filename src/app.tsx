import React from 'react';
import ReactDOM from 'react-dom';
import CoinsList from './components/CoinsList';
import './styles/app.scss';

const App = () => {
  return (
    <div>
      <CoinsList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
