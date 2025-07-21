import { Star } from "lucide-react";
import React from "react";

const MovieCard = ({ title, rating, image, year, genre }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-transform duration-300 cursor-pointer w-full max-w-sm mx-auto">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <button className="bg-yellow-400 text-black font-semibold py-2 px-5 rounded-full hover:bg-yellow-300">View Details</button>
        </div>
        <div className="absolute top-2 left-4 bg-black/70 px-3 py-1.5 rounded-xl flex items-center gap-2 text-yellow-400 font-semibold text-sm">
          <Star className="w-4 h-4" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="p-5 text-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold truncate mr-2">{title}</h3>
          <span className="text-base text-gray-400">{year}</span>
        </div>
        {genre && (
          <div className="flex gap-2 flex-wrap mt-2.5">
            {genre.slice(0, 2).map((g) => (
              <span key={g} className="bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                {g}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;