import React from "react";
import RecipePage from "./RecipePage.js"



const HomePage = ({ countries, recipes, match, history }) => {

const displayCountry = 
    countries &&
    countries.map((country) => (
        <div className="countryHome" key={country.sys.id}>
        <h2>{country.fields.countryDescription}</h2>
        <img src={country.fields.countryImage.fields.file.url} 
             alt={country.fields.countryDescription} 
             style={{width: 450, height:300}} 
        />
        </div>
    ))




return (
    <div>
        {displayCountry}
    </div>
 )
}


export default HomePage;

// browser router on index.js, dynamic link
//when you render the component refetch the data and fiilter it by country