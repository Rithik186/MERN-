import React, { useState } from "react";
export default function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-black">Simple Form</h2>
        <div>
          <label className="text-black">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-2 px-2 py-1 rounded text-black border border-gray-800"
          />
        </div>
        <div>
          <label className="text-black">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ml-2 px-2 py-1 rounded text-black border border-gray-800"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-black px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
