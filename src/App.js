import Article from "./components/Article";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <section className=" overflow-x-hidden  max-w-screen-2xl bg-[#e8f6ed] mx-auto  ">
      <Navbar />
      <div className=" px-5">
        <Article />
      </div>
    </section>
  );
};

export default App;
