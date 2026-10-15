
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Components Import
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Menu */}
      <nav style={{ padding: "15px", background: "#f0f0f0", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>About</Link>
        <Link to="/contact" style={{ textDecoration: "none", fontWeight: "bold" }}>Contact</Link>
      </nav>

      {/* Routes */}
      <div style={{ padding: "0 15px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;