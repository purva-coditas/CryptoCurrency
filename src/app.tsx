import React from "react";
import ReactDOM from "react-dom";
import CoinsList from "./components/CoinsList";
import CoinDisplayPage from "./components/CoinDisplayPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/app.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={CoinsList} />
          <Route
            path="/coinDisplayPage/:id"
            render={(props) => <CoinDisplayPage {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
