import React from "react";

function Recipes({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1>{title}</h1>

      <ol className="list-recipe">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" className="image" />
    </div>
  );
}

export default Recipes;
