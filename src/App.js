import React from "react";
import "./App.css";
//components
import Header from "./components/header/Header";
import PropertyList from "./components/properties/PropertyList";
import PropertyDetails from "./components/properties/PropertyDetails";
import Footer from "./components/footer/Footer";
//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //initialState

  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/">
            <PropertyList />
          </Route>
          <Route exact path="/details/:id">
            <PropertyDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
