import Card from './Card.jsx'

function Home() {
  return (
    
    <div className="cards-container">
      <h1>Welcome To The Fruit Store!! 
        Have Fun!!
      </h1>
      <Card name="Apple" description="A juicy red apple, perfect for snacking daily." />
      <Card name="Banana" description="A sweet yellow banana, great for quick energy." />
      <Card name="Orange" description="A fresh orange full of vitamin C goodness." />
    
    </div>
  )
}

export default Home
