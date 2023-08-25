import { useEffect } from 'react'
import './interactive-text-effect.css'

export default function InteractiveTextEffect() {
  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let interval = null
    let letter = 'Follow @xNoJustice'

    document.querySelector('h1').onmouseover = (event) => {
      let iteration = 0

      clearInterval(interval)

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split('')
          .map((l, index) => {
            if (index < iteration) {
              return letter[index]
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')

        if (iteration >= letter.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 40)
    }
  }, [])

  return (
    <div id="interactive-text-effect">
      <h1>Follow @xNoJustice</h1>
    </div>
  )
}
