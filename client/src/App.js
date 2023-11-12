import './App.css';
import React,{useState,useEffect} from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { Routes,Route} from 'react-router-dom';



function App() {
  

  return (
   <div>
      <Routes>
          <Route path='/' element = {<HomePage/>}/>
      </Routes>
   </div>
  );
}

export default App;
