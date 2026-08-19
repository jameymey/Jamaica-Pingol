import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./layout/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;