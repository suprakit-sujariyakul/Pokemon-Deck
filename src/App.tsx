import { useState } from 'react'
import './App.css'
import { DatePicker, Button, Image } from 'antd';
import pokemonLogoSrc from './assets/images/pokedex.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>React App</div>
      <Image width={200} src={pokemonLogoSrc} />
      <DatePicker />
      <Button type="primary">Click me</Button>
    </>
  )
}

export default App
