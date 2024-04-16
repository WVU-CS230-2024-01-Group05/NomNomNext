import React, { useState } from 'react';
import testRecipes from "./pages/recipes";

const Filter = () => {
    const [searchInput, setSearchInput] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
  
    const handleAddIngredient = () => {
      if (!ingredients.includes(searchInput)) {
        setIngredients([...ingredients, searchInput.trim()]);
        setSearchInput('');
      }
    };
  
    const handleRemoveIngredient = (ingredientToRemove) => {
      const newList = ingredients.filter(
        (ingredient) => ingredient !== ingredientToRemove
      );
      setIngredients(newList);
    };
    
  
    const handleSearch = () => {
      const filtered = recipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredients.includes(ingredient.toLowerCase())
        )
      );
      setFilteredRecipes(filtered);
    };
  
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Please enter your ingredients"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleAddIngredient}>Click to Add Ingredient</button>
        </div>
        <div>
          {ingredients.map((ingredient) => (
            <div key={ingredient}>
              {ingredient}
              <button onClick={() => handleRemoveIngredient(ingredient)}>X</button>
            </div>
          ))}
        </div>
        <button onClick={handleSearch}>Search Recipes</button>
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Filter;
