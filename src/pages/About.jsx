import React from "react";

export const About = () => {
  return (
    <main className="layout__main">
      <section className="top__wrapper">
        <h1 className="top__title">
          Thanks a lot for the free{" "}
          <a className="top__title" href="https://rickandmortyapi.com/">
            API
          </a>
        </h1>
        <div className="top-img"></div>
      </section>
      <section className="bottom__wrapper">
        <div className="bottom__inner"></div>
      </section>
    </main>
  );
};
