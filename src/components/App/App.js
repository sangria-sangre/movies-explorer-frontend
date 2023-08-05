import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';


function App() {

  return (
    <div className='body'>
      <Routes>
        <Route path="/" element={<Main login={false} />} />
        <Route path="/movies" element={<Movies login={true} />} />
        <Route path="/saved-movies" element={<SavedMovies login={true} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;