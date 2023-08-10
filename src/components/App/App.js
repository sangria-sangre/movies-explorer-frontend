import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltrip from '../InfoTooltrip/InfoTooltrip';
import mainApi from '../../utils/MainApi';
import { SavedMoviesContext } from '../../context/SavedMoviesContext';
import { UserDataContext } from '../../context/UserDataContext';

function App() {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState(false);
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [popupTitle, setPopupTitle] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.getContent(jwt)
        .then((res) => {
          if (res) {
            setUserData(res);
            localStorage.setItem('userData', JSON.stringify(res));
            if(!loggedIn){
            setLoggedIn(true);}
          }
        }).catch(err => {
          console.log(err);
        });
    }
  }

  function handleSubmitLogin(email, password) {
    if (!email || !password) {
      togglePopup('authError');
      return;
    }

    mainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch(err => {
        togglePopup('authError');
        console.log(err);
      })
  }

  function handleSubmitRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(() => {
        togglePopup('authDone');
      })
      .catch(err => {
        console.log(err);
        togglePopup(err);
      })
  }

  function togglePopup(title) {
    if (isPopupOpen) {
      setPopupOpen(false);
      if (popupTitle === 'authDone') {
        navigate('/signin', { replace: true });
      }
    } else {
      setPopupTitle(title);
      setPopupOpen(true);
    }
  }


  return (
    <div className='body'>
      <SavedMoviesContext.Provider value={savedMovies}>
        <UserDataContext.Provider value={userData}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route path="/movies" element={<ProtectedRoute element={loggedIn ? Movies : Login} loggedIn={loggedIn} popupOpen={togglePopup} setSavedMovies={setSavedMovies} />} />
            <Route path="/saved-movies" element={<ProtectedRoute element={loggedIn ? SavedMovies : Login} loggedIn={loggedIn} popupOpen={togglePopup} setSavedMovies={setSavedMovies} />} />
            <Route path="/profile" element={<ProtectedRoute element={loggedIn ? Profile : Login} loggedIn={loggedIn} popupOpen={togglePopup} setUserData={setUserData} />} />
            <Route path="/signin" element={<Login handleSubmit={handleSubmitLogin} />} />
            <Route path="/signup" element={<Register handleSubmit={handleSubmitRegister} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </UserDataContext.Provider>
      </SavedMoviesContext.Provider>
      <InfoTooltrip isOpen={isPopupOpen} toggle={togglePopup} popupTitle={popupTitle} />
    </div>
  );
}

export default App;