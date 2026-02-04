import './App.css'
import { HeroBanner } from './components/HeroBanner'
import { Body } from './components/Body'
import { DoctorSearch } from './components/DoctorSearch'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
       <HeroBanner />
       <Body />
       <DoctorSearch />
       <Footer />
    </>
  )
}

export default App
