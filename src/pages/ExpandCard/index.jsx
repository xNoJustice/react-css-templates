import './expand-card.css'

export default function ExpandCard() {
  return (
    <div id="expand-card">
      <div id="marketing" className="section">
        <div className="content">
          <h1>Marketing</h1>
        </div>
        <div className="overlay"></div>
      </div>
      <div id="technology" className="section">
        <div className="content">
          <h1>Technology</h1>
        </div>
        <div className="overlay"></div>
      </div>
      <div id="advertising" className="section">
        <div className="content">
          <h1>Advertising</h1>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  )
}
