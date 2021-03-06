import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const RecipePage = ({ recipes, params, match }) => {
  
  const countryId = parseInt(match.params.countryId);

    return (
    <div className="recipeDisplay">
      <div className="showRecipes" >
      {recipes.length > 0 &&
        recipes
        .filter((country) => countryId === country.countryid )
            .map((recipe) => {
            return (
              <div className="homePage"  key={recipe.id}>
                <Link to={`/displayRecipe/${recipe.id}`}>
                  <div>
                    <h1 className="recipeHead">{recipe.recipedescription}</h1>
                    <img
                      className="recipeImg"
                      src={`http://localhost:3000/assets/images/recipes/${recipe.imagename}`}
                      alt={recipe.recipedescription}
                      style={{ width: 350, height: 250 }}
                    />
                  </div>

                </Link>
              </div>
            );
          })}
    </div>
</div>
  );
};

export default RecipePage;
