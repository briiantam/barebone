import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/public/Home";
import Navbar from "./components/public/Navbar";
import ContactUs from "./pages/public/ContactUs";
import About from "./pages/public/AboutUs";
import Resources from "./pages/public/Resources";
import Product from "./pages/public/Product";
import Footer from "./components/public/Footer";
import Login from "./pages/public/Login";
import GetStarted from "./pages/public/GetStarted";
import StartupPortal from "./pages/protected/StartupPortal";

function App() {
  const location = useLocation();

  // Helper function to check if the current path is in the protected portal
  const isProtectedPath = (pathname) => pathname.startsWith("/startup-portal");

  // Determine if the navbar should be shown
  const showNavbar = !(
    isProtectedPath(location.pathname) ||
    ["/login", "/get-started"].includes(location.pathname)
  );

  // Determine if the footer should be shown
  const showFooter = !isProtectedPath(location.pathname);

  return (
    <div className="bg-gray-900">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
        {/* The "/*" will handle all nested routes within StartupPortal */}
        <Route path="/startup-portal/*" element={<StartupPortal />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}
export default App;
