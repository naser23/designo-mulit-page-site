import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
