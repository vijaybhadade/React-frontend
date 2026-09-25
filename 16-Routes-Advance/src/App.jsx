import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavBar2 from "./Components/NavBar2";
import Footer from "./Components/Footer";
import Root from "./Pages/Root";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ContactDetails from "./Pages/ContactDetails";
import NotFound from "./Pages/NotFound"; // Fixed double slash typo
import HomeContact from "./Pages/HomeContact";
import Busness from "./Pages/Busness";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <NavBar2 />

      <main className="flex-1">
        <Routes>
          {/* 1. Mapped / directly to Root so Navbar links work */}
          <Route path="/" element={<Root />} /> 
          <Route path="/about" element={<About />} />
          
          {/* 2. Lowercase /contact to match Navbar links */}
          <Route path="/contact" element={<Contact />}>
            <Route path="HomeContact" element={<HomeContact />} />
            <Route path="Busness" element={<Busness />} />
            {/* 3. Relative path for dynamic parameter */}
            <Route path=":id" element={<ContactDetails />} /> 
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;