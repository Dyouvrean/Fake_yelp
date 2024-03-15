import './App.css';
import React,{useState,useEffect} from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { Routes,Route} from 'react-router-dom';
import BusinessPage from './Pages/BusinessPage/BusinessPage'
import UserPage from './Pages/UserPage/UserPage';

function App() {
  

  return (
   <div>
      <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path="/Business/:BusId" element={<BusinessPage />}/>
          <Route path="/User/:UserId" element={<UserPage />}/>
      </Routes>
   </div>
  );
}

export default App;
