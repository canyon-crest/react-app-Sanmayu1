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
   <Card name="number of students listening to music" description= " This allows you to change the number of students in class" />
   <Card name="number of students doing homework" description= "This allows you to change the number of students doing their homework" />
   <Card name="number of students talking" description= "This allows you to change the number of students talking" />
   {/* <Footer /> */}
    {/* <App /> */}
    <Footer />
  </StrictMode>,
)
