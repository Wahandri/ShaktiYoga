import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Start from "./components/Start/Start";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageCoaching from "./components/PageCoaching/PageCoaching";
import PageMeditation from "./components/PageMeditation/PageMeditation";
import PageMassage from "./components/PageMassage/PageMassage";
import PageYoga from "./components/PageYoga/PageYoga";
import PageNutrition from "./components/PageNutrition/PageNutrition";
import PageContact from "./components/PageContact/PageContact";
import FloatButton from "./components/FloatButton/FloatButton";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <FloatButton />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/coaching" element={<PageCoaching />} />
          <Route path="/meditation" element={<PageMeditation />} />
          <Route path="/massage" element={<PageMassage />} />
          <Route path="/yoga" element={<PageYoga />} />
          <Route path="/nutrition" element={<PageNutrition />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
