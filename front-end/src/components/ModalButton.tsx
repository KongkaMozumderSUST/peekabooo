import React, { useState } from "react";

const ModalButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        onClick={handleOpen}
      >
        Open modal
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-full ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="bg-white p-6 rounded-lg absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <h2 className="text-lg font-medium mb-2">Text in a modal</h2>
          <p className="text-gray-600 mb-2">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <button
            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalButton;
