import { useState } from 'react'
import './Card.css'

function Card({ name, description }) {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="card-buttons">
        <button onClick={() => setCount(count + 1)}>Add {name}</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <p>Total {name} in cart: {count}</p>
    </div>
  )
}

export default Card
