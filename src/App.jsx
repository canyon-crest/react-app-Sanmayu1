import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Contact from './contact.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import Home from './home.jsx'
import Contact from './contact.jsx'
import About from './about.jsx'


function App() {
  const [page, setPage] = useState("about");

  return (
    <>
    <Nav setPage={setPage}/>
    {page === "home" && <Home />}
    {page ==="about" && <About/>}
    {page === "contact" && <Contact />}
    
    <Card />
    <Footer />
    
    
    </>
  )

}

export default App
 