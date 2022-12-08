import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Join from './components/Join/Join';
import Plans from './components/plans/Plans';
import Program from './components/programs/Program';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />

    </div>
  );
}

export default App;
