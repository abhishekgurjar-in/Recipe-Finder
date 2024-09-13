import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <div>No favorite recipes found.</div>;
  }

  return (
    <div className="favorites-page ">
      <div className="favorite-recipes-text">
        <h1>Favorite Recipes</h1>
      </div>

      <ul className="recipes">
        {favorites.map((recipe) => (
          <div className="recipe">
            <img className="recipe-img" src={recipe.image} alt={recipe.label} />
            <h2 className="label">{recipe.label}</h2>
            <Link to={`/recipe/${recipe.uri.split("_")[1]}`}>
              <button className="button">View Recipe</button>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
