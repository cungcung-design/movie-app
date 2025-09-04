import './App.css';
import Nav from './component/Nav';
import Contacts from './component/Contact';
import Home from './component/Home';
import About from './component/About';
import Detail from './component/Detail';
import Login from './component/Login';
import Signup from './component/Signup';
import Movies from './component/Movie';
import { Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;