import React, { useState } from "react";

const AddClass = () => {
  const [formData, setFormData] = useState({ id: "", name: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-end pr-6">
      <form onSubmit={handleSubmit} className="h-80 w-56   ">
        <div className="bg-white p-6 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">ID</label>
            <input
              className="bg-gray-200 rounded-lg p-2 w-full"
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              className="bg-gray-200 rounded-lg p-2 w-full"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <button className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
