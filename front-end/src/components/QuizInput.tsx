import React, { useState } from "react";

interface QuizQuestion {
  question: string;
  answers: string[];
}

const QuizInput: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [quizQue, setQuizQue] = useState<QuizQuestion>({
    question: "",
    answers: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answers = [answer1, answer2, answer3, answer4];
    setQuizQue({ question, answers });
    console.log(quizQue);
    setQuestion("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");
  };

  return (
    <form onSubmit={handleSubmit} className="text-white flex flex-col ">
      <label>
        Question:
        <input
          type="text"
          value={question}
          className="text-black"
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <label>
        Answer 1:
        <input
          type="text"
          value={answer1}
          className="text-black"
          onChange={(e) => setAnswer1(e.target.value)}
        />
      </label>
      <label>
        Answer 2:
        <input
          type="text"
          value={answer2}
          className="text-black"
          onChange={(e) => setAnswer2(e.target.value)}
        />
      </label>
      <label>
        Answer 3:
        <input
          type="text"
          value={answer3}
          className="text-black"
          onChange={(e) => setAnswer3(e.target.value)}
        />
      </label>
      <label>
        Answer 4:
        <input
          type="text"
          value={answer4}
          className="text-black"
          onChange={(e) => setAnswer4(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuizInput;
