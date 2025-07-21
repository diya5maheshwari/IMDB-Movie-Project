import { Award, Instagram, Star, Twitter, Clapperboard, Calendar, MapPin, Film } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { actors as allActors } from "../data/actors";

const Actor = () => {
  const { id } = useParams();
  const actor = allActors.find((a) => a.id === id) || allActors[0];

  return (
    <div className="bg-[#121212] text-gray-100 min-h-screen">
      {/* --- Cover Image and Header --- */}
      <div className="relative">
        <div 
          className="h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${actor.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        </div>
        <div className="relative z-10 px-4 md:px-8 -mt-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <img 
              src={actor.image} 
              alt={actor.name} 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-lg" 
            />
            <div className="pb-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-gray-200 text-transparent bg-clip-text mb-2">{actor.name}</h1>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>{actor.stats.avgRating} Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>{actor.stats.totalAwards} Awards Won</span>
                </div>
                 <div className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-blue-400" />
                  <span>{actor.stats.moviesCount} Movies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content Grid --- */}
      <div className="grid md:grid-cols-[1fr_2.5fr] gap-8 p-4 md:p-8 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="space-y-6 md:sticky top-24 h-fit">
          <div className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h2 className="text-yellow-400 text-xl font-semibold mb-4 uppercase tracking-wider">Personal Info</h2>
            <dl className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-1"/>
                <div>
                    <dt className="text-gray-400 font-semibold">Born</dt>
                    <dd>{actor.birthDate}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-gray-400 mt-1"/>
                 <div>
                    <dt className="text-gray-400 font-semibold">Place of Birth</dt>
                    <dd>{actor.birthPlace}</dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-md text-center">
            <h2 className="text-yellow-400 text-xl font-semibold mb-4 uppercase tracking-wider">Social Media</h2>
            <div className="flex justify-center gap-6">
              <a href={actor.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-[#E1306C] hover:scale-110">
                <Instagram className="text-white" />
              </a>
              <a href={actor.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-[#1DA1F2] hover:scale-110">
                <Twitter className="text-white" />
              </a>
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <main className="space-y-12">
          <section>
            <h2 className="border-b-2 border-yellow-400 inline-block pb-2 text-yellow-400 text-2xl font-semibold mb-4">Biography</h2>
            <p className="leading-relaxed text-gray-300">{actor.biography}</p>
          </section>

          <section>
            <h2 className="border-b-2 border-yellow-400 inline-block pb-2 text-yellow-400 text-2xl font-semibold mb-4">Awards & Nominations</h2>
            <div className="space-y-4">
              {actor.awards.map((award, index) => (
                <div key={index} className="flex items-start gap-4 bg-yellow-400/10 p-4 rounded-lg">
                  <Award className="text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-lg text-yellow-400">{award.name}</span>
                    <span className="mx-2 text-gray-500">|</span>
                    <span className="font-semibold">{award.year}</span>
                    <p className="mt-1 text-gray-300 text-sm">{award.category} - {award.film}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="border-b-2 border-yellow-400 inline-block pb-2 text-yellow-400 text-2xl font-semibold mb-4">Known For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {actor.knownFor.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`} className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 no-underline text-white">
                  <div className="relative">
                    <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
                    <div className="absolute top-2 right-2 bg-black/70 text-yellow-400 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold text-sm">
                      <Star className="w-4 h-4" />
                      <span>{movie.rating}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-yellow-300 truncate">{movie.title}</h3>
                    <p className="text-sm text-gray-400">{movie.year}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Actor;