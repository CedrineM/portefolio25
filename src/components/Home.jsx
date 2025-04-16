import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <main className="main__home">
      <About />
      <Experience />
      <Projects />
    </main>
  );
};

export default Home;
