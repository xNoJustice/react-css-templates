import './infinite-scroll.css'

const COLORS = ['#00ff59', '#00ffcc', '#c9e1ff', '#a38fff', '#f5d0fe']
const TAGS = [
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'Tailwind',
  'React',
  'Next.js',
  'Gatsby',
  'UI/UX',
  'SVG',
  'animation',
  'webdev',
]
const DURATION = 15000
const ROWS = 5
const TAGS_PER_ROW = 5

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random())

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  )
}

const Tag = ({ text, color }) => (
  <div className="tag" style={{ '--color': COLORS[color] }}>
    <span>#</span> {text}
  </div>
)

const InfiniteScroll = () => (
  <div
    id="infinite-scroll"
    className="flex flex-col items-center justify-center w-full h-auto min-h-screen"
  >
    <header className="flex flex-col mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-500 dark:text-white">
        Infinite Scroll Animation
      </h1>
      <p className="text-lg text-gray-300 font-base">
        CSS only, content independent, bi-directional, customizable
      </p>
    </header>
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} color={i} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  </div>
)

export default InfiniteScroll
