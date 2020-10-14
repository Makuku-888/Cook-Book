import React from "react";
// import RecipePage from "./RecipePage.js"
import { Link } from "react-router-dom";

const HomePage = ({ countries, recipes, match, history }) => {
  const displayCountry =
    countries &&
    countries.map((country) => (
      <div className="countryHome" key={country.sys.id}>
        <Link to={`/recipePage/${country.sys.id}`}>
          <h2 className="countryHead">{country.fields.countryDescription}</h2>
          <img
            className="countryImg"
            src={country.fields.countryImage.fields.file.url}
            alt={country.fields.countryDescription}
            style={{ width: 450, height: 300 }}
          />
        </Link>
      </div>
    ));
  return <div>{displayCountry}</div>;
};
export default HomePage;

// browser router on index.js, dynamic link
//when you render the component refetch the data and filter it by country
