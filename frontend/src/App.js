import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';
import MainMenu from './MainMenu';
function App() {
  return (
  
      <>
        <NavBar />
   
        <Routes>
        <Route path="/" element={<MainMenu/>} />

          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
   
  );
}

export default App;
