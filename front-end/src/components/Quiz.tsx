import React, { useState } from "react";
import Question from "./Question";

const Quiz: React.FC = () => {
  const questions = [
    {
      question: "What is OPP",
      options: ["Object", "Oriented", "Programming", "Not"],
      correctAnswer: "Not",
    },
    {
      question: "What is the answer of 2+2",
      options: ["4", "8", "12", "14"],
      correctAnswer: "4",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(1);

  return (
    <div className="bg-white text-black gap-4 max-w-md mx-auto mt-3 flex flex-col p-3 ">
      <div>Remaining time</div>
      <div className="">
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
        />
        <button className="bg-blue-600 px-4 py-2 mt-3 text-white ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
