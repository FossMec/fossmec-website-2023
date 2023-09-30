import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
