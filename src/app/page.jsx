import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Review from "./components/Review";
import Contact from "./components/Contact";

export default function Home() {
  return (
      <div className="w-screen h-screen bg-[#1a1a1a] text-white overflow-x-hidden">  
        <section>
            <Hero/>
        </section>
        <section id="About">
            <About/>
        </section>
        <section id="Services">
            <Service/>
        </section>
        <section id="Testimonials">
            <Review/>
        </section>
        <section id="Contact">
            <Contact/>
        </section>    
          
      </div>
  );
}
