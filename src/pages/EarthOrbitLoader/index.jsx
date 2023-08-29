import React from 'react'
import './earth-orbit-loader.css'

export default function EarthOrbitLoader() {
  return (
    <div id="earth-orbit-loader">
      <div className="sun"></div>
      <div className="earth">
        <div className="moon"></div>
      </div>
    </div>
  )
}
