import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    </div>
  )
}

export default App
