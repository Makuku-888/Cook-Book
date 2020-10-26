import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link, Route, Switch } from "react-router-dom";
import DisplayRecipe from './DisplayRecipe.js'
// import "../App.css";


const RecipePage = ({ recipes,params,match}) =>{

// const countryId = "6W3boQDHCvvHrwVjWBT4r5"
const countryId = match.params.countryId

return(
    <div className='showRecipes'>
    {recipes.length > 0 && recipes.filter(country => countryId === countryId)
    .map((recipe)=>{
       return (
        <div className="homePage"> 
        <Link to={`/displayRecipe/${recipe.id}`}>
           <div>
            <h1 className="recipeHead">{recipe.recipeDescription}</h1>
           {/* <img className="recipeImg" src={recipe.fields.recipeImage.fields.file.url} 
             alt={recipe.fields.recipeDescription} 
             style={{width: 350, height:250}} 
             /> */}
            </div>
            {/* <p className="ingredients">{documentToReactComponents(recipe.fields.ingredients)}</p>
            <p className="directions">{documentToReactComponents(recipe.fields.directions)}  </p> */}
        </Link>
       
        </div>
     ) })
    }
     
    </div>
)
}

// {documentToReactComponents(recipe.fields.directions.content)}   
export default RecipePage;