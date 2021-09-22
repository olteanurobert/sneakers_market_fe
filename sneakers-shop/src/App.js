import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OneCard from "./Components/OneCard";
import Products from "./Components/Products";
// import CartPage from "./Components/CartPage";

function App() {
  const [selectedCardData, setSelectedCardData] = useState(null);

  //TODO: create an array which stores cart objects
  //TODO: create a value which stores cart cost

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Products setSelectedCardData={setSelectedCardData} />
        </Route>
        <Route exact path="/onecard/:id">
          <OneCard cardData={selectedCardData} />
        </Route>
        {/* <Route exact path="/cartpage/">
          <CartPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
