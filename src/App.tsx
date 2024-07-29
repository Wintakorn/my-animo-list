import { useState } from 'react'
import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from './component/Navigation'
import { Container } from './component/Container'
import { Contact } from './component/Contact'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="app">
          <Navigation />
          <Contact />
          <Container />
          <Footer />
      </div>
    </>
  )
}

export default App
