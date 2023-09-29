import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
