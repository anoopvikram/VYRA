import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Products from "./pages/Products";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";

export const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home = scrollable single page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Products />
              <About />
            </>
          }
        />

        {/* Collections page */}
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
};
