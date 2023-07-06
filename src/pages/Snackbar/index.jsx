import './snackbar.css'

export default function Snackbar() {
  return (
    <div id="snackbar">
      <div className="body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Your account has been created! &#128640;
      </div>
      <div className="progress"></div>
    </div>
  )
}