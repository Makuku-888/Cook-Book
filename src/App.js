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
    // client
    //   .getEntries({ content_type: "countrySections" })
    //   .then((response) => {
    //     setCountries(response.items);
    //   })
    //   .catch((error) => console.log("you have an error"));
    fetch("http://localhost:3000/mockCountry")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data)
        console.log(data);
      })
      .catch((error) => console.log("ERROR FETCHING DATA"));
  }, []);

  useEffect(() => {
    // client
    //   .getEntries({ content_type: "recipeSection" })
    //   .then((response) => {
    //     setRecipes(response.items);
    //   })
    //   .catch((error) => console.log("you have an error"));
    fetch("http://localhost:3000/mockRecipes")
    .then((res) => res.json())
    .then((data2) => {
      setRecipes(data2)
      console.log(data2);
    })
    .catch((error) => console.log("ERROR FETCHING DATA"));
    
  }, []);

  return (
  <>
    <div className="App">
      <div>
        <header>
          <nav className="nav">
          <img id="logo" src="https://mlsf03rmjfdn.i.optimole.com/QjsyvqU.Z_5R~130ed/w:auto/h:auto/q:auto/http://marcotest.the-coding-school.com/files/WBS-CODING-SCHOOL-logo-square.png" alt="logo" 
              style={{ width: 37, height: 43 }}
          />
            <ul>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            </ul>
          </nav>
        </header>
      <div>
        <HomePage countries={countries}/>
      </div>
       
        {/*
        <Switch>
        <Route path="/displayRecipe/:recipeId"
          render={(props) => <DisplayRecipe recipes={recipes} {...props}/>}>
          </Route>
    <Route path="/recipePage/:countryId"
          render ={(props) => <RecipePage recipes={recipes} {...props}/>}>
          </Route>
         
          <Route path="/about"
          render={(props) => <About {...props} />}
          >
          </Route>
          <Route exact path="/">
            <HomePage countries={countries} />
          </Route> 
        </Switch>
        */}
      </div>
      

   {/* 
    
    <footer>
        <div className="social-media-div">
          <img className="social-media" src="../facebook.png"></img>
          <img className="social-media" src="../instagram.png"></img>
          <img className="social-media" src="../twitter.png"></img>
          <img className="youtube-logo social-media" src="../youtube.png"></img>
        </div>
        <div className="copyright-div">
          <p className="copyright">&copy; Company name 2020</p>
        </div>
    </footer> 
    */}
    </div>
   </>
  );
};

export default App;
