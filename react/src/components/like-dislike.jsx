import React, { useState } from "react";
export default function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  return (
    <div className="bg-gray-100">
      <div className="bg-indigo-600 p-6 rounded-lg text-white text-center">
        <h3 className="text-xl font-bold mb-4">Like / Dislike Counter</h3>
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-white text-indigo-600 px-4 py-2 rounded mr-2 hover:bg-gray-200 transition"
        >
          Like ({likes})
        </button>
        <button
          onClick={() => setDislikes(dislikes + 1)}
          className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
}
