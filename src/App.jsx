import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-6 mx-auto text-2xl font-bold dark:text-white">
      <h1 className="text-3xl font-bold underline">
        <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500">
          <span className="relative text-white">Vite</span>
        </span>
        <span className="relative inline-block ml-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500">
          <span className="relative text-white">+</span>
        </span>
        <span className="relative inline-block ml-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple-500">
          <span className="relative text-white">React</span>
        </span>
      </h1>
      <button
        className="p-2 mt-5 bg-blue-500 border-blue-500 rounded-md"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <div className="max-w-lg p-8 mx-auto">
        <details
          className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg"
          open
        >
          <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
            React + Vite?
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias iste facilis minus laboriosam accusamus adipisci quaerat
              delectus eum quos modi, neque, qui veniam. Nostrum a voluptatibus,
              exercitationem magni excepturi explicabo?
            </p>
          </div>
        </details>
      </div>
    </div>
  )
}

export default App
