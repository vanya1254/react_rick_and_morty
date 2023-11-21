import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Character } from "./pages/Character";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { SearchContext } from "./context";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Header />
      <main className="layout__main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </main>

      <Footer />
    </SearchContext.Provider>
  );
}

export default App;
