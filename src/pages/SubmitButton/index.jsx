import './submit-button.css'

export default function SubmitButton() {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const button = e.currentTarget
    button.classList.add('loading')
    button.disabled = true
    setTimeout(() => {
      button.classList.add('loaded')
      setTimeout(() => {
        button.classList.add('finished')
        setTimeout(() => {
          button.classList.remove('finished')
          button.classList.remove('loaded')
          button.classList.remove('loading')
          button.disabled = false
        }, 1500)
      }, 700)
    }, 1500)
  }
  return (
    <div id="submit-button">
      <button class="expand" type="button" onClick={(e) => handleClick(e)}>
        Submit
        <span class="expand-icon expand-hover">
          <svg
            class="first"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 32 32"
            version="1.1"
          >
            <path
              d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098
         0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417
          1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 
          0.208-0.486 0.316-0.757 0.316z"
            />
          </svg>
          <span class="loader"></span>
          <svg
            class="second"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 5L8 15l-5-4"
            />
          </svg>
        </span>
      </button>
    </div>
  )
}
