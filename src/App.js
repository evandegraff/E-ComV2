import { Link, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products }from "./pages/Products";
import { Contact } from "./pages/Contact";
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
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;