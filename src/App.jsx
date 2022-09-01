import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <Nav/> */}
      <NavBar/> 
          <Routes>
          

          </Routes>
    </Router>
  )
}

export default App
