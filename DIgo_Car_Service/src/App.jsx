import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home.";
import Services from "./Pages/Services";
import ServiceSingle from "./Pages/ServiceSingle";
import Footer from "./SharedPages/Footer";
import Navbar from "./SharedPages/Navbar";
import { HelmetProvider } from 'react-helmet-async';



function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<AboutUs />} ></Route>
            <Route path="/service" element={<Services />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/blog" element={<Blog />} ></Route>
            <Route path="/servicesingle/:_id" element={<ServiceSingle />}></Route>
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  )
}

export default App
