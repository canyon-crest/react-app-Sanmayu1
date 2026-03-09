import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from  './Nav.jsx'
import Card from './Card.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
   <Card name="apples" description= "they are apples" />
   <Card name="Grapes" description= "they are Green grapes" />
   <Card name="Pears" description= "they are Pears" />
   {/* <Footer /> */}
    <App />
    <Footer />
  </StrictMode>,
)
