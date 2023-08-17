import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/page';
import Home from './pages/home/page';
import Movie from './pages/movie/page';
import ProfilePicker from './pages/profilepicker/page';
import './styles/App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile-picker" element={<ProfilePicker/>} />
      </Routes>
    </BrowserRouter>)
}

export default App;
