import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Character } from "./pages/Character";

import { Header, Footer } from "./components/";

const App = () => {
  return (
    <>
      <Header />
      <main className="layout__main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
