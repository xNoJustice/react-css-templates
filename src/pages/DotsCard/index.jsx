import './dots-card.css'

export default function DotsCard() {
  return (
    <div id="dots-card">
      <div className="card">
        <div className="card-img">
          <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" />
          <div className="card-effect">
            {Array.from({ length: 100 }, (_, index) => (
              <span key={index} className="card-tile"></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
