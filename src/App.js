import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegUser from './RegUser';
import EditUser from './EditUser';
import RegBook from './RegBook';
import EditBook from './EditBook';
import News from './News';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Libros/RegistroUsuarios" element={<RegUser/>} />
        <Route path="/Libros/EditarUsuarios" element={<EditUser/>}/>
        <Route path="/Libros/RegistroLibros" element={<RegBook/>}/>
        <Route path="/Libros/EditarLibros" element={<EditBook/>}/>
        <Route path="/Libros/Noticias" element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
