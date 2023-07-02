import { useState } from 'react'
import Barcode from 'react-jsbarcode'
import './barcode-generator.css'

export default function BarcodeGenerator() {
  const [input, setInput] = useState('')

  return (
    <div id="barcode-generator">
      <h2>Barcode Generator</h2>
      <input
        type="text"
        placeholder="Enter text"
        className="textInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input.length > 0 && <Barcode value={input} />}
    </div>
  )
}
