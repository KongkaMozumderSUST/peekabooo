import React from "react";

const SetQuestion: React.FC = () => {
  return (
    <div className="bg-white h-28 w-[400px] mx-auto mt-3 ">
      <div className="p-4 gap-4 flex flex-col justify-center items-center">
        <div className="">Ask Question?</div>
        <div className="flex items-stretch gap-4">
          <button className="bg-[#54185D] px-4 py-1 text-white ">
            Set Question
          </button>
          <button className="bg-[#54185D] px-4 py-1 text-white ">
            Random Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetQuestion;
