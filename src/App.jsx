// import styles
import "./styles/global.css";
import "./App.css";

// import hooks
import { useEffect } from "react";

// import components
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const blob = document.getElementById("blob");
      const { clientX, clientY } = e;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="app">
        <div className="app__container">
          <Header />
          <main className="main">
            <About />
            <Experience />
            <Projects />
          </main>
        </div>

        <div id="blob" className="blob"></div>
        <div className="blur"></div>
      </div>
    </>
  );
}

export default App;
