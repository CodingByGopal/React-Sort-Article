import { useState } from "react";
import Button from "./Button";
import dataSrc from "./DataSrc";
import DisplayData from "./DisplayData";
const Article = () => {
  const [paramVar, setParamVar] = useState("");

  const sortFun = (a, b) => {
    if (a[paramVar] > b[paramVar]) {
      return 1;
    }
    if (a[paramVar] < b[paramVar]) {
      return -1;
    }
    return 0;
  };

  const [article, setArticle] = useState(dataSrc.sort(sortFun));

  return (
    <section className="  flex flex-col justify-center items-center mt-10  max-w-screen-lg mx-auto bg-[#1ba94c]   text-teal-50 rounded p-10 shadow-2xl  shadow-black">
      <div className=" flex gap-5 flex-wrap justify-center">
        <Button
          onClick={() => {
            setParamVar("price");
            setArticle(article.sort(sortFun));
          }}
          title="Sort By Price"
        />

        <Button
          onClick={() => {
            setParamVar("title");
            setArticle(article.sort(sortFun));
          }}
          title="Sort By Title"
        />
      </div>
      <DisplayData data={article} />
    </section>
  );
};

export default Article;
