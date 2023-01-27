import React, { useState } from "react";

const ProgressChart = ({ handleClose }: any) => {
  const [percentages, setPercentages] = useState([
    "10",
    "20",
    "30",
    "40",
    "50",
  ]);

  return (
    <div className="text-black flex justify-end pr-4 z-20   mt-2  ">
      <div className="bg-white px-5 py-3 divide-x-2 flex   ">
        {percentages.map((percentage) => (
          <div className="px-3 ">{percentage}%</div>
        ))}
      </div>
      <span
        className="font-bold text-black flex cursor-pointer  "
        onClick={handleClose}
      >
        X
      </span>
    </div>
  );
};

export default ProgressChart;
