import { useState } from "react";
import { useReview } from "./ReviewContext";

const ReviewForm = () => {
  const { addReview } = useReview();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !content) return alert("Fill all fields");
    addReview({ author, content });
    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        className="p-3 rounded-md border border-gray-600 text-base bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <textarea
        placeholder="Write your review..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="p-3 rounded-md border border-gray-600 text-base bg-gray-700 text-gray-100 resize-y placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button type="submit" className="p-3 bg-yellow-400 text-black border-none rounded-md cursor-pointer font-semibold hover:bg-yellow-300 transition-colors">
          Post Review
      </button>
    </form>
  );
};

export default ReviewForm;