import React, { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";
import RecipeContainer from "./RecipeContainer";
import Para from "./Para";
import Pic from "./Pic";

const APP_ID = "020020c5";
const APP_KEY = "fe5457564cdc11faecddfe9a55c2a6ad";
function Header({mode , toggleMode}) {
  const [timeoutId, settimeoutId] = useState();
  const [recipeList, setrecipeList] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const fetchRecipe = async (input) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    console.log(response);
    setrecipeList(response.data.hits);
    setIsLoading(false) ;
  };
  const onTextInput = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
    settimeoutId(timeout);
  };


  return (
    <>
      <div className="header">
        <div className="appname">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
            alt="mainpic"
            className="mainpic"
          ></img>
          Ultimate Recipes
        </div>
        <div className="searchname">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2731/2731146.png"
            alt="searchimg"
            className="searchimg"
          ></img>
          <input
            type="text"
            placeholder="Search..."
            className="input"
            onChange={onTextInput}
          ></input>
         
        </div>
        <div className="darkmode">
        {/* <p className="darkpara"></p>  */}
       <button className="dark"  onClick={toggleMode}>DarkMode</button>
      </div>
      </div>

      <Para className='para'
        title='"A recipe has no soul. You, as the cook, must bring the soul to the recipe"
    – Thomas Keller'
   
        />
    {isLoading ? <Pic/> :
      (<div className="recipeListContainer">
        {recipeList &&
          recipeList.map((recipeObj) => (
            <RecipeContainer recipeObj={recipeObj.recipe} />
          ))}
      </div>)}
      
    
    </>
  );
}

export default Header;
