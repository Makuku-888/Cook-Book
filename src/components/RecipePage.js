import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RecipePage = ({ recipes }) =>{



return(
    <>
    {recipes && recipes.map((recipe)=>{
       return (
        <> 
            <p>{recipe.fields.recipeDescription}</p>
            {documentToReactComponents(recipe.fields.directions)}   
        </>
     ) })
    }
     
    </>
)
}

// {documentToReactComponents(recipe.fields.directions.content)}   
export default RecipePage;