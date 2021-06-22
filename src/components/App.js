/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StocksContainer from '../containers/StocksContainer';
// import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={StocksContainer} />
          {/* <Route path="/product/:productId" component={ProductDetails} /> */}
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;