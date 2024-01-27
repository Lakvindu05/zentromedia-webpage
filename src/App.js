import "./App.css";
import Companies from "./components/Companies";
import Container from "./components/Container";
import Team from "./components/Team";
import NavBar from "./components/NavBar";
import Revenue from "./components/Revenue";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container />
      <Revenue />
      <Services />
      <Companies />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
