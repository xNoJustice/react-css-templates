import React, { useEffect } from 'react'
import './animated-background.css'

export default function AnimatedBackground() {
  useEffect(() => {
    setInterval(() => {
      const colors = ['2196F3', 'e91e63', 'ffeb3b', '74ff1d']

      const section = document.getElementById('animated-background')
      const square = document.createElement('span')
      const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      const starPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path',
      )
      star.setAttributeNS(null, 'viewBox', '0 0 24 24')
      star.setAttributeNS(null, 'width', '40px')
      star.setAttributeNS(null, 'height', '40px')
      star.setAttributeNS(null, 'fill', 'none')
      star.setAttributeNS(null, 'strokeWidth', 1.5)
      star.setAttributeNS(null, 'stroke', 'currentColor')
      star.style.top = Math.random() * self.innerHeight - 60 + 'px'
      star.style.left = Math.random() * self.innerWidth - 60 + 'px'

      starPath.setAttributeNS(null, 'stroke-linecap', 'round')
      starPath.setAttributeNS(null, 'stroke-linejoin', 'round')
      starPath.setAttributeNS(
        null,
        'd',
        'M14.65 8.93274L12.4852 4.30901C12.2923 3.89699 11.7077 3.897 11.5148 4.30902L9.35002 8.93274L4.45559 9.68243C4.02435 9.74848 3.84827 10.2758 4.15292 10.5888L7.71225 14.2461L6.87774 19.3749C6.80571 19.8176 7.27445 20.1487 7.66601 19.9317L12 17.5299L16.334 19.9317C16.7256 20.1487 17.1943 19.8176 17.1223 19.3749L16.2878 14.2461L19.8471 10.5888C20.1517 10.2758 19.9756 9.74848 19.5444 9.68243L14.65 8.93274Z',
      )
      let size = Math.random() * 20

      square.style.height = 20 + size + 'px'
      square.style.width = 20 + size + 'px'

      square.style.top = Math.random() * self.innerHeight - 40 + 'px'
      square.style.left = Math.random() * self.innerWidth - 40 + 'px'

      let randomColor = colors[Math.floor(Math.random() * 4)]
      square.style.backgroundColor = '#' + randomColor
      star.style.color = '#' + randomColor

      section.appendChild(square)
      star.appendChild(starPath)
      section.appendChild(star)

      setTimeout(function () {
        section.removeChild(square)
        section.removeChild(star)
      }, 5000)
    }, 100)
  }, [])

  return <div id="animated-background"></div>
}
