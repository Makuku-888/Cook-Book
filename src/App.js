import React, { useState, useEffect } from "react";
import "./App.css";
import client from "./contentfulclient.js";
import HomePage from "./components/HomePage.js";
import RecipePage from "./components/RecipePage.js";
import { Link, Route, Switch } from "react-router-dom";
import DisplayRecipe from "./components/DisplayRecipe";
import About from "./components/About";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "countrySections" })
      .then((response) => {
        setCountries(response.items);
      })
      .catch((error) => console.log("you have an error"));
  }, []);

  useEffect(() => {
    client
      .getEntries({ content_type: "recipeSection" })
      .then((response) => {
        setRecipes(response.items);
      })
      .catch((error) => console.log("you have an error"));
  }, []);

  return (
    <div className="App">
      <div>
        <header>
          <nav>
            <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/recipePage/:countryId"
          render ={(props) => <RecipePage recipes={recipes} {...props}/>}>
          </Route>
          <Route path="/displayRecipe/:recipeId"
          render={(props) => <DisplayRecipe recipes={recipes} {...props}/>}>
          </Route>
          <Route path="/about"
          render={(props) => <About {...props} />}
          >
          </Route>
          <Route exact path="/">
            <HomePage countries={countries} />
          </Route> 
        </Switch>
      </div>
    </div>
  );
};

export default App;
