import { SlidersHorizontal, Star } from "lucide-react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { movies as allMovies } from "../data/movies"; // Import central movie list

const MovieList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  // In a real app, you would filter based on the search param
  const Movies = allMovies;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          {search ? `Search Results for "${search}"` : "Popular Movies"}
        </h1>
        <button className="flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700">
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="no-underline">
            <div className="bg-gray-800 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 group">
              <div className="relative">
                <img src={movie.image} alt={movie.title} className="w-full h-96 object-cover" />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-yellow-400 font-semibold">{movie.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white truncate mb-2 group-hover:text-yellow-300">{movie.title}</h2>
                <div className="flex justify-between items-center">
                  <span className="text-base text-gray-400">{movie.year}</span>
                  <div className="flex gap-1.5">
                    {movie.genre.slice(0, 2).map((g) => (
                      <span key={g} className="bg-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-full">{g}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;