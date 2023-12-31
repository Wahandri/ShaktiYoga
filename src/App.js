import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start/Start";
import Header from "./components/Header/Header";
import PageCoaching from "./components/Coaching/PageCoaching";
import PageMeditation from "./components/Meditation/PageMeditation";
import PageMassage from "./components/Massage/PageMassage";
import PageYoga from "./components/Yoga/PageYoga";
import PageNutrition from "./components/Nutrition/PageNutrition";
import PageContact from "./components/PageContact/PageContact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <hr className="marginHeader" />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/coaching" element={<PageCoaching />} />
          <Route path="/meditation" element={<PageMeditation />} />
          <Route path="/massage" element={<PageMassage />} />
          <Route path="/yoga" element={<PageYoga />} />
          <Route path="/nutrition" element={<PageNutrition />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/" element={<Start />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
