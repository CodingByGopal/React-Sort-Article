import React from "react";
import Button from "./Button";

const Article = () => {
  return (
    <section className=" flex justify-center items-center mt-10  max-w-screen-lg mx-auto bg-[#1ba94c] text-teal-50 rounded p-10 shadow-2xl  shadow-black">
      <div className=" flex gap-5">
        <Button title="Sort By Price" />
        <Button title="Sort By Rating" />
      </div>
    </section>
  );
};

export default Article;
