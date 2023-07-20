
import './App.css'
import Header from './components/Header';
import { useState } from 'react';
import Pic from './components/Pic'



function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.getElementsByClassName("para").color = "white";
  }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      }
  };


  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      {/* <Pic/> */}
     
    </>
  );
}

export default App;
