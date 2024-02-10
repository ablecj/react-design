
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

function App() {


  return  (
      <div className="grid grid-rows-auto-1fr" >
        <div className="w-full">
        <Header />
        </div>
        <section className="flex-1">
        <Services />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <WhyUs />
        </section>
        <section>
          <Team />
        </section>
        <section>
          <Contact />
        </section>
        <section>
          <Blog />
        </section>
        <section>
          <Footer />
        </section>
      </div>
  );
}

export default App;
