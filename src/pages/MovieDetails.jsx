import { Star, Clock, Calendar, Play, Heart, Bookmark, Camera, MessageSquare, Film } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { movies as allMovies } from "../data/movies"; // Import the central movie list

// A new component for the streaming button
const StreamingButton = ({ service }) => {
    const serviceStyles = {
        'prime video': 'bg-[#00A8E1] text-white',
        'netflix': 'bg-[#E50914] text-white',
        'disney+': 'bg-[#001E63] text-white',
    };
    return (
        <a href="#" className={`block w-full text-center py-3 rounded-lg font-semibold ${serviceStyles[service] || 'bg-gray-600'}`}>
            Watch on {service.charAt(0).toUpperCase() + service.slice(1)}
        </a>
    );
};

const MovieDetails = () => {
  const { id } = useParams();
  const movie = allMovies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div className="text-center py-20 text-2xl text-gray-400">Movie not found!</div>;
  }

  // Filter for related movies (e.g., same genre)
  const relatedMovies = allMovies.filter(m => m.genre.some(g => movie.genre.includes(g)) && m.id !== movie.id).slice(0, 4);

  return (
    <div className="bg-[#121212] text-white">
      {/* --- Backdrop and Poster Section --- */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <img src={movie.backdrop} alt={`${movie.title} backdrop`} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
            <div className="flex flex-col md:flex-row items-end gap-8">
                <img src={movie.image} alt={movie.title} className="w-48 md:w-60 rounded-lg shadow-2xl aspect-[2/3] object-cover -mb-16 md:-mb-24 ring-4 ring-gray-800" />
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold">{movie.title}</h1>
                    <div className="flex items-center gap-4 text-gray-400 mt-2">
                        <span>{movie.year}</span>
                        <span>•</span>
                        <span>{movie.duration}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- Main Content Section --- */}
      <div className="container mx-auto px-4 pt-20 md:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Left Column */}
          <div className="space-y-10">
            <div className="flex gap-2">
                {movie.genre.map(g => <span key={g} className="bg-gray-800 text-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold">{g}</span>)}
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">{movie.description}</p>

            <div>
                <div className="border-b border-gray-700 pb-2 mb-4">
                    <h3 className="text-xl font-semibold text-yellow-400">Creator</h3>
                </div>
                <p className="text-gray-300">{movie.creator}</p>
            </div>

            <div>
                <div className="border-b border-gray-700 pb-2 mb-4">
                    <h3 className="text-xl font-semibold text-yellow-400">Writers</h3>
                </div>
                <p className="text-gray-300">{movie.writers.join(', ')}</p>
            </div>
            
            <div>
                 <div className="border-b border-gray-700 pb-2 mb-4">
                    <h3 className="text-xl font-semibold text-yellow-400">Stars</h3>
                </div>
                <div className="flex flex-col gap-4">
                    {movie.cast.map(actor => (
                        <Link to={`/actor/${actor.id}`} key={actor.id} className="flex items-center gap-4 hover:bg-gray-800 p-2 rounded-lg transition-colors">
                            <img src={actor.image} alt={actor.name} className="w-12 h-12 rounded-full object-cover"/>
                            <div>
                                <p className="font-semibold text-white">{actor.name}</p>
                                <p className="text-sm text-gray-400">{actor.role}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400"/>
                    <div>
                        <p className="text-xl font-bold">{movie.rating}<span className="text-sm text-gray-400">/10</span></p>
                        <p className="text-sm text-gray-400">{movie.votes}</p>
                    </div>
                </div>
            </div>
            
            {movie.streamingOn && <StreamingButton service={movie.streamingOn} />}
            
            <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors">
                <Heart /> Add to Watchlist
            </button>
            <button className="w-full bg-gray-800 text-gray-300 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
                <Bookmark /> Mark as Watched
            </button>

            <div className="flex justify-around text-center text-gray-400 pt-4">
                <a href="#" className="hover:text-white">
                    <Camera className="mx-auto mb-1"/>
                    <p>{movie.photoCount}+ Photos</p>
                </a>
                 <a href="#" className="hover:text-white">
                    <MessageSquare className="mx-auto mb-1"/>
                    <p>{movie.userReviews} User reviews</p>
                </a>
            </div>

            {/* Extra Details */}
            <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">Did you know?</h4>
                <p className="text-sm text-gray-300">{movie.trivia}</p>
            </div>
          </div>
        </div>

        {/* Related Movies Section */}
        <div className="mt-20">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400 flex items-center gap-3"><Film/> More Like This</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedMovies.map(m => (
                    <Link to={`/movie/${m.id}`} key={m.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
                        <img src={m.image} alt={m.title} className="w-full h-64 object-cover"/>
                        <div className="p-4">
                            <h4 className="font-semibold truncate">{m.title}</h4>
                            <div className="flex items-center justify-between text-sm text-gray-400 mt-1">
                                <span>{m.year}</span>
                                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400"/> {m.rating}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;