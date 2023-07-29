import { Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
// import { createBrowserHistory } from 'history';63
import Login from './components/Login';

export const Public = () =>{


    return(
     
        <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
  
    )
}