import React from 'react'
import { Link } from 'react-router-dom'
import { templates } from '../data'

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto min-h-screen p-6 mx-auto text-2xl font-bold dark:text-white">
      <h1 className="text-3xl font-bold underline">
        <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500">
          <span className="relative text-white">React + Vite</span>
        </span>
        <span className="relative inline-block ml-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500">
          <span className="relative text-white">CSS</span>
        </span>
        <span className="relative inline-block ml-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple-500">
          <span className="relative text-white">Templates</span>
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-3 lg:grid-cols-4">
        {templates.map((template) => (
          <Link
            key={template.img}
            to={`/${template.img}`}
            className="flex flex-col p-2 border-4 border-teal-500 rounded-xl hover:scale-110 hover:border-rose-500"
            target="_blank"
          >
            <video
              className="rounded-lg w-80 h-80"
              autoPlay
              muted
              playsInline
              loop
            >
              <source
                src={
                  new URL(`../videos/${template.img}.mp4`, import.meta.url).href
                }
                type="video/mp4"
              />
            </video>
            <span className="text-2xl text-center">{template.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
