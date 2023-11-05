
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import './index.css'
import Solutions from './Components/Solutions'
import Aboutus from './Components/Aboutus'
import Elevate from './Components/Elevate'
import News from './Components/News'
import StartShared from './Components/StartShared'
import OnDemand from './Components/OnDemand'
import Shared from './Components/Shared'
import Contact from './Components/Contact'
import Sign from './Components/Sign'
import Footer from './utils/Footer'
import Navbar from './utils/Navbar'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Solutions' element={<Solutions />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Elevate' element={<Elevate />} />
        <Route path='/News' element={<News />} />
        <Route path='/OnDemand' element={<OnDemand />} />
        <Route path='/Shared' element={<Shared />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/StartShared' element={<StartShared />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
