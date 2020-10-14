import React, { useState, useEffect } from 'react';
import './App.css';
import client from './contentfulclient.js';
import HomePage from './components/HomePage.js';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import RecipePage from './components/RecipePage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
 
 const [countries, setCountries] = useState([]);
 const [recipes, setRecipes] = useState([]);


useEffect(() => {
 client
    .getEntries({ 'content_type' : "countrySections" })
    .then((response) => {
      setCountries(response.items);
    })
    .catch((error) => console.log("you have an error"));
}, []);


useEffect(() => {
  client
     .getEntries({ 'content_type' : "recipeSection" })
     .then((response) => {
       setRecipes(response.items);
     })
     .catch((error) => console.log("you have an error"));
 }, []);
 
 
 console.log(recipes)



  return (
    <div className="App">
      <nav>
        <ul className="nav">
          <Link to="/">Home</Link>
          <Link to="/brazil">Brazil</Link>
          <Link to="/nigeria">Nigeria</Link>
          <Link to="/germany">Germany</Link>
          <Link to="/usa">United States</Link>
        </ul>
      </nav>

      <div >
        <Switch>
          <Route 
            path="/brazil"
            render={(props)=> <RecipePage  recipes={recipes} {...props} />}
          />
           <Route 
            path="/nigeria"
            render={(props)=> <RecipePage  recipes={recipes} {...props} />}
          />
           <Route 
            path="/germany"
            render={(props)=> <RecipePage  recipes={recipes} {...props} />}
          />
           <Route 
            path="/usa"
            render={(props)=> <RecipePage  recipes={recipes} {...props} />}
          />
          <Route
            exact path="/" 
            render={(props)=> <HomePage countries={countries} recipes={recipes} {...props} />}
          />
        </Switch>
       
      </div>
    </div>
  );
}


//react router, or pass the recipes as a property
//this was on line 58
// <HomePage countries={countries} recipes={recipes}/>
//{recipes && <RecipePage recipes={recipes} /> }


/*client.getEntries()
  .then((response) => console.log(response.items))
  .catch(console.error)
*/
/*  client.getEntries()
    .then(function (entries) {
        entries.items.forEach(function (entry) {
            if(entry.fields.countryDescription) {
                console.log(entry)
            }
        })
    })

const Countries = 
  countries.map((entry) => (
  <div className='entry' key={entry.sys.id}>
    {entry.fields.countryImage}
    {entry.fields.countryDescription}
</div> 
));

    */

/* useEffect(() => {
  client
    .getEntries({ content_type: "recipeSections"})
}) */

export default App;
