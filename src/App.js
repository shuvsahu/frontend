import React from 'react'
import './App.css';
import './assets/theme/global.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}

export default App

