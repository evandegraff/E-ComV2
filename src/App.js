import { Link, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import  Products from "./components/Products";
import { Contact } from "./components/Contact";
// import { Container } from "react-bootstrap";
// import carousel, { CarouselItem } from "./components/Slider";
// import Carousel from "./components/Slider";

function App() {
  return (
    <>
      <nav class="navbar">
        <div class="logo">Records</div>
        <div class="menu">
        <ul>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/products">Products</Link>
          </ul>
          <ul>
            <Link to="/contact">Contact</Link>
          </ul>
        </ul>
        </div>
      </nav>


      <Routes>
        <Route path="/" element= {<Index /> }/>
        <Route path="/Products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;