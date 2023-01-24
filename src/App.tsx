import { useState } from 'react'
import './App.css'
import { Image } from 'antd'
import pokemonLogoSrc from './assets/images/pokedex.png'
import { Button } from '@atomic'
import { log } from '@utilities'


function App() {
  const [count, setCount] = useState(0)

  log("hello");

  return (
    <>
      <div>React App</div>
      <Image width={200} src={pokemonLogoSrc} />
      <Button type="primary">Click me</Button>
    </>
  )
}

export default App
