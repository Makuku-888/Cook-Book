import React from "react";


const HomePage = ({ countries, match, history }) => {

const displayCountry = 
    countries &&
    countries.map((country) => (
        <div className="countryHome">
        <h2>{country.fields.countryDescription}</h2>
        <img src={country.fields.countryImage.fields.file.url} 
             alt={country.fields.countryDescription} 
             style={{width: 450, height:300}} 
        />
        </div>
    ))

const handleClick = () =>{
    
}


return (
    <div>
        {displayCountry}
    </div>
 )
}


export default HomePage;
