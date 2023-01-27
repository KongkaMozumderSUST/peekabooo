import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const ClassName = () => {
  const classes = [
    {
      name: "faridul reza",
      date: "2022-20-2",
    },
    {
      name: "faridul reza",
      date: "2022-20-2",
    },
    {
      name: "faridul reza",
      date: "2022-20-2",
    },
    {
      name: "faridul reza",
      date: "2022-20-2",
    },
  ];

  return (
    <div className="text-black  flex justify-end pr-6  ">
      <div className="bg-white">
        <div className=" h-80 w-48 flex flex-col overflow-y-scroll ">
          {classes.map((cls) => (
            <div className="flex flex-col mx-auto bg-black  h-12 my-4 text-white px-4    ">
              <span>{cls.name}</span>
              <span>{cls.date}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end pr-8 pb-4 ">
          <IoIosAddCircle className="h-8 w-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ClassName;
