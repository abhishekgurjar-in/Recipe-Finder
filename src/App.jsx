import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Trending from "./pages/Trending";
import NewRecipe from "./pages/NewRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/new-recipe" element={<NewRecipe />} />
        <Route path="/new-recipe" element={<NewRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
   <div className="footer">
   <p>Made with ❤️ by Abhishek Gurjar</p>
   </div>
    </>
  );
};

export default App;
