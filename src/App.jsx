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
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
