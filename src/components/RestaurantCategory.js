import { useState } from "react";
import AccordionList from "./AccordianList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" m-8 bg-white">
        <div
          className="flex justify-between cursor-pointer h-12 items-center bg-gray-100 w-9/12 shadow-lg rounded"
          onClick={clickHandler}
        >
          <span className="font-extrabold p-4 m-4">
            {data?.title}({data?.itemCards?.length})
          </span>
          {/* <span>
            {showItems ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </span> */}
        </div>

        {/* Accirdion Body */}
        {showItems && <AccordionList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
