import './App.css';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { HealthCard } from './components/healthCard/healthCard';
import { Accordian } from './components/accordian/accordian';
import { Healthtrackings } from './components/healthTracking/healthtracking';
import { Nextgen } from './components/nextgen/nextgen';
import { Tweets } from './components/tweets/tweets';
import { Leaders } from './components/leaders/leaders';
import { Footer } from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HealthCard/>
      <Accordian/>
      <Healthtrackings/>
      <Nextgen/>
      <Tweets/>
      <Leaders/>
      <Footer/>
    </div>
  );
}

export default App;
