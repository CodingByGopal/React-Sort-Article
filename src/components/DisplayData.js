import React from "react";

const DisplayData = ({ data }) => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 ">
      {data?.map((item, i) => {
        return (
          <div
            className="flex flex-col shadow-2xl   font-bold  rounded text-center p-5 text-[#01b540] bg-white  my-5  gap-2"
            key={i}
          >
            <h1 className=" mb-3 text-2xl underline underline-offset-4">
              {item?.title?.substring(0, 20)}...
            </h1>
            <div>
              <p className=" text-sm">Price: {item?.price}$</p>
              <p className=" text-sm">Rating: {item?.rating.rate}⭐ </p>
              <p className=" mt-5 text-sm">
                Description: {item?.description?.substring(0, 30)}....
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayData;
