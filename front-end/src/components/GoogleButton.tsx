import React from "react";

const GoogleButton = () => {
  return (
    <div className="text-black flex justify-end pr-6 ">
      <div className="bg-white h-96 w-48 flex justify-center items-center">
        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleButton;
