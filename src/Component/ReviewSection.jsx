import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const ReviewSection = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="max-w-4xl mx-auto my-8 p-4 md:p-6 bg-gray-800 rounded-xl text-gray-100 shadow-xl">
      <h2 className="text-3xl mb-4 text-center text-yellow-300">📝 Reviews</h2>
      <div className="text-center">
        <button 
          onClick={() => setShowForm((prev) => !prev)} 
          className="py-2 px-4 my-4 bg-gray-600 border-transparent cursor-pointer rounded-lg font-semibold hover:bg-gray-500 transition-colors"
        >
          {showForm ? "Close" : "Write a Review"} 
        </button>
      </div>
      {showForm && <ReviewForm onSave={() => setShowForm(false)} />}
      <ReviewList />
    </div>
  );
};

export default ReviewSection;