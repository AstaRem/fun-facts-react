// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="page-wrapper">
      <Navbar />
      <MainContent />

    </div>
  )
}

export default App
