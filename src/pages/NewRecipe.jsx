import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewRecipe = () => {
  const [newRecipes, setNewRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_ID = "2cbb7807";
  const API_KEY = "17222f5be3577d4980d6ee3bb57e9f00";

  useEffect(() => {
    const fetchNewRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=new&app_id=${API_ID}&app_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNewRecipes(data.hits);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch new recipes");
        setLoading(false);
      }
    };

    fetchNewRecipes();
  }, []);

  if (loading)
    return (
      <div className="loader-section">
        <div className="loader"></div>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="new-recipe">
      <div className="new-recipe-main">
        <div className="new-recipe-text">
          <h1>New Recipes</h1>
        </div>
      </div>

      <div className="recipes">
        {newRecipes.map((item, index) => (
          <div key={index} className="recipe">
            <img
              className="recipe-img"
              src={item.recipe.image}
              alt={item.recipe.label}
            />
            <h2 className="label">{item.recipe.label}</h2>
            <Link to={`/recipe/${item.recipe.uri.split("_")[1]}`}>
              <button className="button">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRecipe;
