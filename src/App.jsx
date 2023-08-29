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
import VerticalAnimatedCarousel from './pages/VerticalAnimatedCarousel'
import NamedLoader from './pages/NamedLoader'
import LoginForm from './pages/LoginForm'
import FlipCardHover from './pages/FlipCardHover'
import AnimatedTagCloud from './pages/AnimatedTagCloud'
import AnnouncementBar from './pages/AnnouncementBar'
import PricingCard from './pages/PricingCard'
import CustomTooltip from './pages/CustomTooltip'
import ExpandCard from './pages/ExpandCard'
import HoverGlideGallery from './pages/HoverGlideGallery'
import InteractiveTextEffect from './pages/InteractiveTextEffect'
import LikeButton from './pages/LikeButton'
import MatrixLogin from './pages/MatrixLogin'
import SocialMedia from './pages/Social Media'
import SubmitButton from './pages/SubmitButton'
import VideoButtonAnimation from './pages/VideoButtonAnimation'
import AnimatedFilter from './pages/AnimatedFilter'
import DotsCard from './pages/DotsCard'
import SubscriptionCard from './pages/SubscriptionCard'
import ParallaxMenu from './pages/ParallaxMenu'
import Artists from './pages/Artists'
import Footer from './pages/Footer'
import Atom from './pages/Atom'
import BoxHillLoader from './pages/BoxHillLoader'
import ColorfulBlackHoleLoader from './pages/ColorfulBlackHoleLoader'
import ColorfulStarLoader from './pages/ColorfulStarLoader'
import EarthOrbitLoader from './pages/EarthOrbitLoader'
import CubesLoader from './pages/CubesLoader'
import StarcaiseLoader from './pages/StarcaiseLoader'
import WavePercentLoader from './pages/WavePercentLoader'

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
      <Route
        path="/vertical-animated-carousel"
        element={<VerticalAnimatedCarousel />}
      />
      <Route path="/named-loader" element={<NamedLoader />} />
      <Route path="/login-form" element={<LoginForm />} />
      <Route path="/flip-card-hover" element={<FlipCardHover />} />
      <Route path="/animated-tag-cloud" element={<AnimatedTagCloud />} />
      <Route path="/announcement-bar" element={<AnnouncementBar />} />
      <Route path="/pricing-card" element={<PricingCard />} />
      <Route path="/custom-tooltip" element={<CustomTooltip />} />
      <Route path="/expand-card" element={<ExpandCard />} />
      <Route path="/hover-glide-gallery" element={<HoverGlideGallery />} />
      <Route
        path="/interactive-text-effect"
        element={<InteractiveTextEffect />}
      />
      <Route path="/like-button" element={<LikeButton />} />
      <Route path="/matrix-login" element={<MatrixLogin />} />
      <Route path="/social-media" element={<SocialMedia />} />
      <Route path="/submit-button" element={<SubmitButton />} />
      <Route
        path="/video-button-animation"
        element={<VideoButtonAnimation />}
      />
      <Route path="/animated-filter" element={<AnimatedFilter />} />
      <Route path="/dots-card" element={<DotsCard />} />
      <Route path="/subscription-card" element={<SubscriptionCard />} />
      <Route path="/parallax-menu" element={<ParallaxMenu />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/atom" element={<Atom />} />
      <Route path="/box-hill-loader" element={<BoxHillLoader />} />
      <Route
        path="/colorful-black-hole-loader"
        element={<ColorfulBlackHoleLoader />}
      />
      <Route path="/colorful-star-loader" element={<ColorfulStarLoader />} />
      <Route path="/earth-orbit-loader" element={<EarthOrbitLoader />} />
      <Route path="/cubes-loader" element={<CubesLoader />} />
      <Route path="/starcaise-loader" element={<StarcaiseLoader />} />
      <Route path="/wave-percent-loader" element={<WavePercentLoader />} />
    </Routes>
  )
}

export default App
