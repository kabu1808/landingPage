import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import MultipleItems from "./components/carousel/Slider";
import Contact from "./components/contact/Contact";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";
import Perks from "./components/perks/Perks";
import Play from "./components/play/Play";
import ScrollButton from "./components/scrollButton/ScrollButton";
import Specs from "./components/specs/Specs";
// import Review from "./components/userReview/Review";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <Navbar />
          <Specs />
          <Play />
          <Details />
          <Perks />
          <MultipleItems />
          <Contact />
          <Footer />
          <ScrollButton />
        </div>
      )}
    </div>
  );
}

export default App;
