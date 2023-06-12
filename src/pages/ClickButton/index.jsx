import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import './click-button.css'

export default function ClickButton() {
  const [cursorGrabbed, setCursorGrabbed] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const handleCursorGrabbed = () => {
    setCursorGrabbed(true)
    setTimeout(() => {
      setCursorGrabbed(false)
    }, 1000)
  }

  const handleButtonClicked = () => {
    setGameOver(true)
    setTimeout(() => {
      setGameOver(false)
    }, 2000)
  }

  return (
    <div
      id="click-button"
      style={{
        cursor: cursorGrabbed ? 'none' : 'default',
      }}
    >
      <section className="flex flex-col text-gray-400 dark:text-white/90">
        <h1 className="text-2xl">Can you click the button?</h1>
      </section>

      <button className="trap-button" onClick={() => handleButtonClicked()}>
        {gameOver && 'Nice one'}
        {cursorGrabbed && 'Gotcha!'}
        {!gameOver && !cursorGrabbed && 'Button!'}
      </button>

      <div className="grab-zone-wrapper">
        <GrabZone
          onCursorGrabbed={() => handleCursorGrabbed()}
          cursorGrabbed={cursorGrabbed}
          gameOver={gameOver}
        />
      </div>
    </div>
  )
}

const ASSETS = {
  head: new URL('./images/head.svg', import.meta.url).href,
  waiting: new URL('./images/hand.svg', import.meta.url).href,
  stalking: new URL('./images/hand-waiting.svg', import.meta.url).href,
  grabbing: new URL('./images/hand.svg', import.meta.url).href,
  grabbed: new URL('./images/hand-with-cursor.svg', import.meta.url).href,
  shaka: new URL('./images/hand-surfs-up.svg', import.meta.url).href,
}

Object.keys(ASSETS).forEach((key) => {
  const img = new Image()
  img.src = ASSETS[key]
})

const useHover = () => {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  const enter = () => setHovered(true)
  const leave = () => setHovered(false)

  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter)
    ref.current.addEventListener('mouseleave', leave)
    return () => {
      ref.current.removeEventListener('mouseenter', enter)
      ref.current.removeEventListener('mouseleave', leave)
    }
  }, [ref])

  return [ref, hovered]
}

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', setFromEvent)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  return position
}

const usePosition = () => {
  const ref = useRef()
  const [position, setPosition] = useState({})

  const handleResize = () => {
    setPosition(ref.current.getBoundingClientRect())
  }

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref.current])

  return [ref, position]
}

const GrabZone = ({ cursorGrabbed, gameOver, onCursorGrabbed }) => {
  const [outerRef, outerHovered] = useHover()
  const [innerRef, innerHovered] = useHover()
  const [isExtended, setExtendedArm] = useState(false)

  let state = 'waiting'
  if (outerHovered) {
    state = 'stalking'
  }
  if (innerHovered) {
    state = 'grabbing'
  }
  if (cursorGrabbed) {
    state = 'grabbed'
  }
  if (gameOver) {
    state = 'shaka'
  }

  useEffect(() => {
    let timer
    if (state === 'grabbing') {
      timer = setTimeout(() => {
        setExtendedArm(true)
        timer = null
      }, 1000)
    }
    return () => {
      setExtendedArm(false)
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [state])

  return (
    <div className="grab-zone" ref={outerRef}>
      <div className="grab-zone__danger" ref={innerRef}>
        <Grabber
          state={state}
          gameOver={gameOver}
          extended={isExtended}
          onCursorGrabbed={onCursorGrabbed}
        />
      </div>
    </div>
  )
}

// Grabber (The graphic)
const Grabber = ({ state, gameOver, extended, onCursorGrabbed }) => {
  const mousePos = useMousePosition()
  const [ref, position] = usePosition()

  const x = position.left + position.width * 0.5
  const y = position.top + position.height * 0.5
  const angle = gameOver
    ? 0
    : Math.atan2(mousePos.x - x, -(mousePos.y - y)) * (180 / Math.PI)

  const rotation = Math.min(Math.max(parseInt(angle), -79), 79)

  const grabberClass = `grabber grabber--${state} ${
    extended && 'grabber--extended'
  }`
  const wrapperStyle = { transform: `rotate(${rotation}deg)` }

  let handImageSrc = ASSETS[state]

  return (
    <div className={grabberClass}>
      <div className="grabber__body"></div>
      <img className="grabber__face" src={ASSETS.head} />
      <div className="grabber__arm-wrapper" ref={ref} style={wrapperStyle}>
        <div className="grabber__arm">
          <img
            className="grabber__hand"
            src={handImageSrc}
            onMouseEnter={onCursorGrabbed}
          />
        </div>
      </div>
    </div>
  )
}
