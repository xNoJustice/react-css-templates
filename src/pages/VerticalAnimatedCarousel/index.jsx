import './vertical-animated-carousel.css'

export default function VerticalAnimatedCarousel() {
  const emojis = [
    ['🐳', 'spouting whale', 'U+1F433'],
    ['🐋', 'whale', 'U+1F40B'],
    ['🐬', 'dolphin', 'U+1F42C'],
    ['🐟', 'fish', 'U+1F41F'],
    ['🐠', 'tropical fish', 'U+1F420'],
    ['🐡', 'blowfish', 'U+1F421'],
    ['🦈', 'shark', 'U+1F988'],
    ['🐙', 'octopus', 'U+1F419'],
    ['🐚', 'spiral shell', 'U+1F41A'],
  ]
  return (
    <div id="vertical-animated-carousel">
      <div className="carousel">
        {emojis.map((emoji) => (
          <div className="carousel-item" key={emoji[1]}>
            <div className="carousel-head">{emoji[0]}</div>
            <div className="carousel-body">
              <p className="title">{emoji[1]}</p>
              <p>Unicode: {emoji[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
