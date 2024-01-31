import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { Header, Footer } from "./components/";

const About = React.lazy(
  () => import(/*webpackChunkName: "About"*/ "./pages/About")
);
const Character = React.lazy(
  () => import(/*webpackChunkName: "Character"*/ "./pages/Character")
);

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="layout__main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<div>Loading ...</div>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/character/:id"
            element={
              <React.Suspense fallback={<div>Loading ...</div>}>
                <Character />
              </React.Suspense>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
