import './flash-message.css'

export default function FlashMessage() {
  return (
    <div id="flash-message">
      <div id="success-box">
        <div className="face">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth happy"></div>
        </div>
        <div className="shadow scale"></div>
        <div className="message">
          <h1 className="alert">Success!</h1>
          <p>yay, everything is working.</p>
        </div>
        <button className="button-box">
          <h1 className="green">continue</h1>
        </button>
      </div>
      <div id="error-box">
        <div className="face2">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth sad"></div>
        </div>
        <div className="shadow move"></div>
        <div className="message">
          <h1 className="alert">Error!</h1>
          <p>oh no, something went wrong.</p>
        </div>
        <button className="button-box">
          <h1 className="red">try again</h1>
        </button>
      </div>
    </div>
  )
}
