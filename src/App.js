import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App() {
  return (
   <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contacts" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
   </div>
  )
}

export default App;
