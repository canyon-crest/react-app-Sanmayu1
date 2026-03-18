import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import GoogleLogin from './components/GoogleLogin.jsx'
function App() {
const [page, setPage] = useState("home");

return (
<div className="app-container">
<Nav setPage={setPage} page={page} />

<main className="main-content">
{page === "home" && <Home />}
{page === "about" && <About />}
{page === "contact" && <Contact />}
</main>

<Footer />
</div>
)
}

export default App

 