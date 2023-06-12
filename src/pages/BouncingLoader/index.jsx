import './bouncing-loader.css'

export default function BouncingLoader() {
  return (
    <div id="bouncing-loader">
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div></div>
  )
}
