import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Use React Router to get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const API_ID = "2cbb7807";
  const API_KEY = "17222f5be3577d4980d6ee3bb57e9f00";

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${API_ID}&app_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipe(data.recipe);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch recipe details");
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const addToFavorites = () => {
    const updatedFavorites = [...favorites, recipe];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = () => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.uri !== recipe.uri
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = favorites.some((fav) => fav.uri === recipe?.uri);

  if (loading)
    return (
      <div className="loader-section">
        <div className="loader"></div>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="recipe-detail">
      {recipe && (
        <>
        <div className="recipe-details-text" >
          <h1>{recipe.label}</h1>
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions:</h2>
          {/* Note: Edamam API doesn't provide instructions directly. You might need to link to the original recipe URL */}
          <p>
            For detailed instructions, please visit the{" "} 
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
              Recipe Instruction
            </a>
            
          </p>
          {isFavorite ? (
            <button className="fav-btn" onClick={removeFromFavorites}>Remove from Favorites</button>
          ) : (
            <button className="fav-btn" onClick={addToFavorites}>Add to Favorites</button>
          )}
        </div>
        <div className="recipe-details-img">
        <img src={recipe.image} alt={recipe.label} />
        </div>
        </>
      )}
    </div>
   
  );
};

export default RecipeDetail;
