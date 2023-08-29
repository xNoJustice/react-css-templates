import React, { useState, useEffect } from 'react'
import './wave-percent-loader.css'

export default function WavePercentLoader() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 1
        if (newPercent === 100) {
          clearInterval(interval)
        }
        return newPercent
      })
    }, 60)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div id="wave-percent-loader" style={{ '--completion': `${percent}%` }}>
      <output name="result">{percent}%</output>
    </div>
  )
}
