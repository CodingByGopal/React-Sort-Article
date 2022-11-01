import React from "react";
import Article from "./components/Article";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <section className="  max-w-screen-2xl bg-[#e8f6ed] mx-auto  ">
      <Navbar />
      <Article />
    </section>
  );
};

export default App;
