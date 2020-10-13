import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RecipePage = ({ recipes }) =>{



return(
    <>
    {recipes && recipes.map((recipe)=>{
       return (
        <> 
            <h1 className="recipeHead">{recipe.fields.recipeDescription}</h1>
            <img className="recipeImg" src={recipe.fields.recipeImage.fields.file.url} 
             alt={recipe.fields.recipeDescription} 
             style={{width: 450, height:300}} 
            />
            <p className="ingredients">{documentToReactComponents(recipe.fields.ingredients)}</p>
            <p className="directions">{documentToReactComponents(recipe.fields.directions)}  </p>
        </>
     ) })
    }
     
    </>
)
}

// {documentToReactComponents(recipe.fields.directions.content)}   
export default RecipePage;