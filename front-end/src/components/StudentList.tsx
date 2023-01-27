import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import ProgressChart from "./ProgressChart";

interface Student {
  name: string;
  Image: string;
}

const StudentList: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const students: Student[] = [
    {
      name: "faridul reza",
      Image:
        "https://clementjames.org/wp-content/uploads/2019/09/avatar-1577909_960_720-1.png",
    },
    {
      name: "faridul reza",
      Image:
        "https://clementjames.org/wp-content/uploads/2019/09/avatar-1577909_960_720-1.png",
    },
    {
      name: "faridul reza",
      Image:
        "https://clementjames.org/wp-content/uploads/2019/09/avatar-1577909_960_720-1.png",
    },
    {
      name: "faridul reza",
      Image:
        "https://clementjames.org/wp-content/uploads/2019/09/avatar-1577909_960_720-1.png",
    },
  ];

  return (
    <div className="flex justify-end p-10">
      <div className="bg-[#FFFDFD] px-4 py-2   w-[300px] flex flex-col  ">
        {open && <ProgressChart handleClose={handleClose} />}
        <button className="bg-[#54185E] text-white px-2 py-2 mx-3 my-2  ">
          List of students
        </button>
        <div className="px-4 mt-4 divide-y divide-[#1E1919] overflow-y-scroll  ">
          {students.map((student) => (
            <div className="flex items-center justify-between">
              <div className="flex gap-2 py-3 cursor-pointer ">
                <img className="h-6 w-6 rounded-full" src={student.Image} />
                <div>{student.name}</div>
              </div>
              <div className="cursor-pointer" onClick={handleOpen}>
                35%
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#54185E] ml-[35%] m-4 p-1 w-20 flex justify-center ">
          <div className="text-white flex items-center justify-center gap-2 ">
            <ImCross />
            Close
          </div>
        </button>
      </div>
    </div>
  );
};

export default StudentList;
