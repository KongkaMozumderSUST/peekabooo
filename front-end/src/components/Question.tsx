import React from "react";

interface Props {
  question: string;
  options: string[];
}

const Question: React.FC<Props> = ({ question, options }) => {
  return (
    <div className="bg-[white]  ">
      <div className="text-black">
        <h3 className="pb-3">{question}</h3>
        <div className="flex justify-between">
          {options.map((option, index) => (
            <div key={index}>
              <input type="radio" name={question} value={option} />
              <label>{option}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
