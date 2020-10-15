import React from 'react';
import {Link} from 'react-router-dom'


const RecipePage = ({ recipes,params,match}) =>{

// const countryId = "6W3boQDHCvvHrwVjWBT4r5"
const countryId = match.params.countryId

return(
    <div className='showRecipes'>
    {recipes.length > 0 && recipes.filter(country => countryId === country.fields.relatedCountry.sys.id)
    .map((recipe)=>{
       return (
        <> 
        <Link>
            <h1 className="recipeHead">{recipe.fields.recipeDescription}</h1>
            <img className="recipeImg" src={recipe.fields.recipeImage.fields.file.url} 
             alt={recipe.fields.recipeDescription} 
             style={{width: 350, height:250}} 
             />
            {/* <p className="ingredients">{documentToReactComponents(recipe.fields.ingredients)}</p>
            <p className="directions">{documentToReactComponents(recipe.fields.directions)}  </p> */}
        </Link>
        </>
     ) })
    }
     
    </div>
)
}

// {documentToReactComponents(recipe.fields.directions.content)}   
export default RecipePage;