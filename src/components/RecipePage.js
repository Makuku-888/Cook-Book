import React from "react";
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from "react-router-dom";
// import DisplayRecipe from './DisplayRecipe.js'
import "../App.css";

const RecipePage = ({ recipes, params, match }) => {
  // const countryId = "6W3boQDHCvvHrwVjWBT4r5"
  const countryId = parseInt(match.params.countryId);
    return (
      <div className="showRecipes">
      {recipes.length > 0 &&
        recipes
        .filter((country) => countryId === country.countryid )
            .map((recipe) => {
            return (
              <div className="homePage" key={recipe.id}>
                <Link to={`/displayRecipe/${recipe.id}`}>
                  <div>
                    <h1 className="recipeHead">{recipe.recipedescription}</h1>
                    <img
                      className="recipeImg"
                      src={recipe.url}
                      alt={recipe.recipedescription}
                      style={{ width: 350, height: 250 }}
                    />
                  </div>
                  <p className="ingredients">{recipe.ingredients}</p>
                  <p className="directions">{recipe.directions} </p>
                </Link>
              </div>
            );
          })}
    </div>
  );
};

// {documentToReactComponents(recipe.fields.directions.content)}
export default RecipePage;
