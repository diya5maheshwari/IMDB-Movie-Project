import React from "react";
import { useReview } from "./ReviewContext";
import ReviewForm from "./ReviewForm";
import { motion } from "framer-motion";

const ReviewList = () => {
  const { reviews, deleteReview, voteReview } = useReview();

  const sortedReviews = [...reviews].sort((a, b) => b.votes - a.votes);

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 bg-gray-800 rounded-xl text-gray-100 shadow-xl">
      <h2 className="text-3xl mb-4 text-center text-yellow-300">Reviews</h2>
      <ReviewForm />
      <div className="flex flex-col gap-5">
        {sortedReviews.map((review) => (
          <motion.div key={review.id} className="bg-gray-700 p-5 rounded-lg border border-gray-600 hover:scale-105 transition-transform duration-300" layout>
            <h3 className="text-xl mb-1 text-yellow-300">{review.author}</h3>
            <p className="text-base leading-relaxed mb-2 text-gray-300">{review.content}</p>
            <div className="flex items-center gap-2.5 text-sm">
              <button onClick={() => voteReview(review.id, 1)} className="bg-transparent text-yellow-300 text-lg border-none cursor-pointer hover:scale-125 transition-transform">👍</button>
              <button onClick={() => voteReview(review.id, -1)} className="bg-transparent text-yellow-300 text-lg border-none cursor-pointer hover:scale-125 transition-transform">👎</button>
              <span className="text-gray-400">{review.votes} votes</span>
              <button onClick={() => deleteReview(review.id)} className="ml-auto bg-transparent text-red-500 text-lg border-none cursor-pointer hover:scale-125 transition-transform">🗑️</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;