import { useState } from 'react'
import './App.css'

function App() {
  const [qrValue, setQrValue] = useState("")

  return (
    <>
      <div>
        <h1>Lector QR</h1>
        <p>{qrValue}</p>
        <input
        autoFocus
        onChange={(e) => setQrValue(e.target.value)}
        value={qrValue}
        />
      </div>
    </>
  )
}

export default App
