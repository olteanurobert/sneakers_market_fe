import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import OneCard from "./components/OneCard/OneCard";
import ProductsShoes from "./components/ProductsShoes/ProductsShoes";
import CartPage from "./components/CartPage/CartPage";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import Subheader from "./components/Subheader/Subheader";
import PlataLivrare from "./components/PlataLivrare/PlataLivrare";
import Returnare from "./components/Returnare/Returnare";
import Garantie from "./components/Garantie/Garantie";
import Contact from "./components/Contact/Contact";
import ProductsHaine from "./components/ProductsHaine/ProductsHaine";
import ProductsAccesorii from "./components/ProductsAccesorii/ProductsAccesorii";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedCardData, setSelectedCardData] = useState(null);

  //TODO: create an array which stores cart objects
  //TODO: create a value which stores cart cost

  return (
    <Router>
      <Header />
      <Subheader />
      <Switch>
        <Route exact path="/accesorii">
          <ProductsAccesorii setSelectedCardData={setSelectedCardData} />
        </Route>
        <Route exact path="/shoes">
          <ProductsShoes setSelectedCardData={setSelectedCardData} />
        </Route>
        <Route exact path="/haine">
          <ProductsHaine setSelectedCardData={setSelectedCardData} />
        </Route>
        <Route exact path="/onecard/:id">
          <OneCard cardData={selectedCardData} />
        </Route>
        <Route exact path="/cartpage">
          <CartPage />
        </Route>
        <Route exact path="/orderdetails">
          <OrderDetails />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/platalivrare">
          <PlataLivrare />
        </Route>
        <Route exact path="/returnare">
          <Returnare />
        </Route>
        <Route exact path="/garantie">
          <Garantie />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
