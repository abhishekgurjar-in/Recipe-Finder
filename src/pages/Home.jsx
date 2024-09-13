import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";


const Home = () => {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const recipeSectionRef = useRef(null);

  const API_ID = "2cbb7807";
  const API_KEY = "17222f5be3577d4980d6ee3bb57e9f00";

  const getRecipe = async () => {
    if (!query) return; // Add a check to ensure the query is not empty
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  // Use useEffect to detect changes in the recipe state and scroll to the recipe section
  useEffect(() => {
    if (recipe.length > 0 && recipeSectionRef.current) {
      recipeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  // Handle key down event to trigger getRecipe on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getRecipe();
    }
  };

  return (
    <div className="home">
      <div className="home-main">
        <div className="home-text">
          <h1>Find your Favourite Recipe</h1>
        </div>
        <div className="input-box">
          <span>
            <input
              type="text"
              placeholder="Enter Recipe"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown} // Add the onKeyDown event handler
            />
          </span>
          <IoSearch className="search-btn" onClick={getRecipe} />
        </div>
      </div>
      <div ref={recipeSectionRef} className="recipes">
        {recipe.map((item, index) => (
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

export default Home;
