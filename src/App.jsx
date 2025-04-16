// import styles
import "./styles/global.css";
import "./App.css";

// import hooks
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// import components
import Header from "./components/Header/Header";
import Archive from "./components/Archive/Archive";
import Home from "./components/Home";

function AppContent() {
  const location = useLocation();

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
    <div className="app">
      <div className="app__container">
        {location.pathname !== "/archive" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>

      <div id="blob" className="blob"></div>
      <div className="blur"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
