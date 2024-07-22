import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
//import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import './App.css';
//import TopAlbums from "./components/TopAlbums/TopAlbums";
//import NewAlbums from "./components/NewAlbums/NewAlbums";
 import Hero from "./components/Hero/Hero.jsx";
 //import Songs from "./components/Songs/Songs";



function App() {
  return(
    <div className="App">
    <Navbar />
    <Hero />
    </div>
   
  );
}

export default App;