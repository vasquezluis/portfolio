import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <ContactForm />
    </>
  );
}

export default App;
