import { Star, Trophy } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { movies as allMovies } from "../data/movies"; 

const TopRated = () => {
  const currentYear = new Date().getFullYear();

  // 1. Filter out upcoming movies
  // 2. Sort the remaining movies by rating
  // 3. Take the top 5
  const topMovies = allMovies
    .filter(movie => movie.year <= currentYear) 
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <Trophy className="w-8 h-8 text-yellow-400" />
        <h1 className="text-3xl font-bold">Top 5 Rated Movies</h1>
      </motion.div>

      <div className="flex flex-col gap-6">
        {topMovies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/movie/${movie.id}`} className="no-underline">
              <div className="bg-gray-800 text-gray-900 rounded-xl overflow-hidden shadow-lg flex transition-all duration-300 hover:shadow-yellow-400/20 hover:scale-101">
                <div className="w-28 bg-yellow-400 flex items-center justify-center font-bold text-2xl p-2">
                  #{index + 1}
                </div>
                <div className="w-48 relative">
                  <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-semibold text-white">{movie.title}</h2>
                    <div className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-800">{movie.rating}</span>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <span>{movie.year}</span>
                    {movie.votes && <>
                        <span className="mx-2">•</span>
                        <span>{movie.votes} votes</span>
                    </>}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;