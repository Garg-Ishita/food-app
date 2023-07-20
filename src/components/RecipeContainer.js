import React, { useState } from 'react'
import './RecipeContainer.css'
import Modal from './Modal';
// import {Dialog,DialogActions, DialogContent, DialogContentText,DialogTitle} from '@mui/material/Dialog';



function RecipeContainer({recipeObj}) {


  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
   
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      


    }
  };

 
  return (


    <>
  
    <div className='outerbox'>
        <img src={recipeObj.image} alt="food" className='foodPic'/>
        <span className='recipeName'>{recipeObj.label}</span>
        {/* <Modal/> */}
        <button className='details' onClick={()=>window.open(recipeObj.url)}> Click here for the full recipe</button>
    </div> 
  </>
  )
}

export default RecipeContainer