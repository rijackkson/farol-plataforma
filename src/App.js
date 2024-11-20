//import logo from './logo.svg';
import React from "react";


import "./css/uifonts.css"
import "./css/props.css"
import "./css/App.css"


//screen
 import Header from './screens/header';
 import Sidebar from './screens/sidebar';
 import HomePage from './screens/home';

function App() {
  return (
    <div className="App flex">         
      
      <Sidebar />
      
      <div className="app-content">
      
      <HomePage />

      </div>

     
    </div>
  );
}

export default App;
