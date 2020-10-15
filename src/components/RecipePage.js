import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link, Route, Switch } from "react-router-dom";
import DisplayRecipe from './DisplayRecipe.js'
// import "../App.css";

const RecipePage = ({ recipes,params,match}) =>{

// const countryId = "6W3boQDHCvvHrwVjWBT4r5"
const countryId = match.params.countryId

return(
    <>
    {recipes.length > 0 && recipes.filter(country => countryId === country.fields.relatedCountry.sys.id)
    .map((recipe)=>{
       return (
        <div className="homePage"> 
        <Link to={`/displayRecipe/${recipe.sys.id}`}>
           <div>
            <h1 className="recipeHead">{recipe.fields.recipeDescription}</h1>
            <img className="recipeImg" src={recipe.fields.recipeImage.fields.file.url} 
             alt={recipe.fields.recipeDescription} 
             style={{width: 450, height:300}} 
             />
            </div>
            {/* <p className="ingredients">{documentToReactComponents(recipe.fields.ingredients)}</p>
            <p className="directions">{documentToReactComponents(recipe.fields.directions)}  </p> */}
        </Link>
       
        </div>
     ) })
    }
     
    </>
)
}

// {documentToReactComponents(recipe.fields.directions.content)}   
export default RecipePage;