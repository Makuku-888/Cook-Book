import React from 'react';
import {Link} from 'react-router-dom'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "../App.css";

const DisplayRecipe = ({ recipes, match, history }) =>{


const recipeId = match.params.recipeId




console.log(match.params.recipeId)


return(
 <>
  
    {recipes.length > 0 && recipes.filter(recipe => recipeId === recipe.sys.id)
        .map((recipe)=>{
       return (
        <div className="displayRecipes" key={recipe.id}> 
         <h1>{recipe.recipeDescription}</h1> 
        <div className="displayRecipes-body">
        <div className="img-ingredients-div">
                {/*<img className="recipeImg recipeImg-displayRecipes" src={recipe.fields.recipeImage.fields.file.url} 
                    alt={recipe.fields.recipeDescription} 
                    // style={{width: 450, height:480}} 
                /> */}
                <p className="ingredients">{documentToReactComponents(recipe.ingredients)}</p>
            </div>
            <p className="directions">{documentToReactComponents(recipe.directions)}  </p>
        </div>
           
             
        </div>

     ) 
    })
    }
     
    </>
)
}

export default DisplayRecipe;