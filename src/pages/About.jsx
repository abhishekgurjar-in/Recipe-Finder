import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about-main">
        <h1>About Us</h1>
        <p>
          Welcome to Recipe Finder, your go-to place for discovering delicious recipes from around the world!
        </p>
        <p>
          Our platform allows you to search for recipes based on your ingredients or dietary preferences. Whether you're looking for a quick meal, a healthy option, or a dish to impress your friends, we have something for everyone.
        </p>
        <p>
          We use the Edamam API to provide you with a vast database of recipes. You can easily find new recipes, view detailed instructions, and explore new culinary ideas.
        </p>
        <p>
          <strong>Features:</strong>
          <ul>
            <li>Search for recipes by ingredient, cuisine, or dietary restriction.</li>
            <li>Browse new and trending recipes.</li>
            <li>View detailed recipe instructions and ingredient lists.</li>
            <li>Save your favorite recipes for quick access.</li>
          </ul>
        </p>
        <p>
          Our mission is to make cooking enjoyable and accessible. We believe that everyone should have the tools to cook great meals at home.
        </p>
      </div>
    </div>
  );
};

export default About;
