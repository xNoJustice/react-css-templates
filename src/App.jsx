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
import MultiStepForm2 from './pages/MultiStepForm2'
import RocketLoader from './pages/RocketLoader'
import Unsubscribe from './pages/Unsubscribe'
import AnimatedBackground from './pages/AnimatedBackground/index'
import AnimatedCounter from './pages/AnimatedCounter'
import BarcodeGenerator from './pages/BarcodeGenerator'
import HoverEffects from './pages/HoverEffects'
import RocketLoader2 from './pages/RocketLoader2'
import Snackbar from './pages/Snackbar'
import FlashMessage from './pages/FlashMessage'

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
      <Route path="/multi-step-form2" element={<MultiStepForm2 />} />
      <Route path="/rocket-loader" element={<RocketLoader />} />
      <Route path="/unsubscribe" element={<Unsubscribe />} />
      <Route path="/animated-background" element={<AnimatedBackground />} />
      <Route path="/animated-counter" element={<AnimatedCounter />} />
      <Route path="/barcode-generator" element={<BarcodeGenerator />} />
      <Route path="/hover-effects" element={<HoverEffects />} />
      <Route path="/rocket-loader2" element={<RocketLoader2 />} />
      <Route path="/snackbar" element={<Snackbar />} />
      <Route path="/flash-message" element={<FlashMessage />} />
    </Routes>
  )
}

export default App
