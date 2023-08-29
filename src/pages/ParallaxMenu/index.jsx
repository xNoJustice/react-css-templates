import { useEffect } from 'react'
import './parallax-menu.css'

export default function ParallaxMenu() {
  useEffect(() => {
    const menu = document.getElementById('parallax-menu')

    Array.from(document.getElementsByClassName('menu-item')).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index
        }
      },
    )
  }, [])

  return (
    <div id="parallax-menu">
      <div id="menu-items">
        <div className="menu-item">Home</div>
        <div className="menu-item">Shop</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Contact Us</div>
      </div>
      <div id="menu-background-pattern" />
      <div id="menu-background-image" />
    </div>
  )
}
