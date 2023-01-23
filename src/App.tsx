import { useState } from 'react'
import './App.css'
import { DatePicker, Button } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DatePicker />
      <Button type="primary">Click me</Button>
    </>
  )
}

export default App
