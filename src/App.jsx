import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import LatestUpdates from "./components/LatestUpdates";
import Footer from "./components/Footer";
import SOTK from "./pages/sotk"; // halaman baru
import VisionMission from "./pages/VisionMission"; // halaman baru
import DemografiPage from "./pages/demografi"; // halaman baru
import SDGsDesa from "./pages/SDGsDesa"; // halaman baru

const Home = () => (
  <>
    <NavBar />
    <Hero />
    <About />
    <Features />
    <Story />
    <LatestUpdates />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sotk" element={<SOTK />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/demografi" element={<DemografiPage />} />
          <Route path="/sdgs" element={<SDGsDesa />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
