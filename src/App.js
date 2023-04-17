import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import MultipleItems from "./components/carousel/Slider";
import Contact from "./components/contact/Contact";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";
import Perks from "./components/perks/Perks";
import Play from "./components/play/Play";
import Specs from "./components/specs/Specs";
// import Review from "./components/userReview/Review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Specs />
      <Play />
      <Details />
      <Perks />
      <MultipleItems />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
