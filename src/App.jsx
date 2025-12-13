import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Sosmedpage from "./pages/Sosmedpage";
import Contactpage from "./pages/Contactpage";

import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/Portofolio";

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/*Content*/}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Sosmed" element={<Sosmedpage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Portofolio" element={<Portfoliopage />} />
      </Routes>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;
