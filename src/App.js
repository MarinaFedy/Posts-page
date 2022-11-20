import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './styles/index.css';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/Navbar/Navbar';

function App() {

    return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>        
        <Route path='/posts' element={<Posts/>}/>
        <Route path="/" element={<Navigate replace to="/posts" />} />
      </Routes>
    </BrowserRouter>
  ) ;
}

export default App;
