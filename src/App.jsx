import './App.css';
import { HeroBanner } from './components/HeroBanner';
import { Body } from './components/Body';
import { DoctorSearch } from './components/DoctorSearch';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <HeroBanner />
      <DoctorSearch />
      <Body />
      <Footer />
    </>
  );
}

export default App;
