import './App.css';
import LandingPage from './components/landingPage/LandingPage'
import Onboarding from  './components/onboarding/Onboarding'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="onboarding" element={ <Onboarding/> } />
      </Routes>
    </div>
  );
}

export default App;
