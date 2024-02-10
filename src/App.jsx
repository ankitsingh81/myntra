import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './views/home';
import Login from './views/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  )
}

export default App
