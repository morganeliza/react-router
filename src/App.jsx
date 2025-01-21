import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue"
import Red from "./components/Red"
import Green from './components/Green'
import Magenta from './components/Magenta'
import Home from "./components/Home"

function App() {

  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue />} />
          <Route path='/red' element={<Red />} />
          <Route path='/green' element={<Green />} />
          <Route path='/magenta' element={<Magenta />} />
          <Route path='/' element={<Home />} />

        </Routes>
      </div>
      <div id="navbar">
        <Link to={"/blue"} >
          <h2> 🔵 Blue</h2>
        </Link>
        <Link to={"/red"} >
          <h2> 🔴 Red</h2>
        </Link >
        <Link to={"/green"} >
          <h2> 🟢 Green</h2></Link>
          <Link to={"magenta"} >
          <h2> 🟣 Magenta</h2>
        </Link >
        <Link to={"/"} >
          <h2>Home</h2>
        </Link >
      </div >
    </>
  )
}

export default App
