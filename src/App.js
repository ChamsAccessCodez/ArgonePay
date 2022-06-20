import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Onboarding from "./components/onboarding/Onboarding";
import UserStep1 from "./components/onboarding/user/SignUp1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="userStep1" element={<UserStep1 />} />
      </Routes>
    </div>
  );
}

export default App;
