import React from "react";
// import RecipePage from "./RecipePage.js"
import { Link } from "react-router-dom";

const HomePage = ({ countries, recipes, match, history }) => {
  
  const displayCountry =
    countries &&
    countries.map((country) => (
      <div className="countryHome" key={country.id}>
        <Link to={`/recipePage/${country.id}`}>
          <h2 className="countryHead">{country.countrydescription}</h2>
          <img
            className="countryImg"
            src={`http://localhost:3000/assets/images/countries/${country.imagename}`}
            alt={country.countrydescription}
            style={{ width: 450, height: 300 }}
          /> 
        </Link>
      </div>
    ));

  return (
    <>
      <div className="banner">
        <div className="bannerText">
          <h1>Explore the World's finest cuisine with us!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p id="continueHere">
            By clicking on a country, you will be able to take a peek into local
            cuisine.
          </p>
        </div>
      </div>
      <div className="countryDisplay">{displayCountry}</div>
    </>
  );
};
export default HomePage;

// browser router on index.js, dynamic link
//when you render the component refetch the data and filter it by country
