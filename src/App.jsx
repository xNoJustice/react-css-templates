import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ClickButton from './pages/ClickButton'
import CreditCard from './pages/CreditCard'
import ImpossibleCheckbox from './pages/ImpossibleCheckbox'
import InfiniteScroll from './pages/InfiniteScroll'
import MultiStepForm from './pages/MultiStepForm'
import GhostLoader from './pages/GhostLoader'
import SpinnerLoader from './pages/SpinnerLoader'
import BouncingLoader from './pages/BouncingLoader'
import SearchBar from './pages/SearchBar'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} index />
      <Route path="/click-button" element={<ClickButton />} />
      <Route path="/credit-card" element={<CreditCard />} />
      <Route path="/impossible-checkbox" element={<ImpossibleCheckbox />} />
      <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      <Route path="/multi-step-form" element={<MultiStepForm />} />
      <Route path="/ghost-loader" element={<GhostLoader />} />
      <Route path="/spinner-loader" element={<SpinnerLoader />} />
      <Route path="/bouncing-loader" element={<BouncingLoader />} />
      <Route path="/search-bar" element={<SearchBar />} />
    </Routes>
  )
}

export default App
