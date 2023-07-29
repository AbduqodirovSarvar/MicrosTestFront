import { Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
// import { createBrowserHistory } from 'history';


export const Private = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};