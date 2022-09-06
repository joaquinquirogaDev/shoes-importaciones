import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Inicio from './Components/Inicio/Inicio';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <Nav/> */}
      <NavBar />
      <Routes>
      <Route exact path='/' element={<Inicio/>}></Route>

      </Routes>
    </Router>
  )
}

export default App
