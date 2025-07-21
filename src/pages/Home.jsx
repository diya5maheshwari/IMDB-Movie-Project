import Hero from "../Component/Hero";
import { TrendingUp, Star, Clock, Award } from 'lucide-react';
import { Link } from "react-router-dom";
import MovieCarousel from "../Component/MovieCarousel";
import TrendingCarousel from "../Component/TrendingCarousel";
import { motion } from 'framer-motion';
import { actors } from "../data/actors";
import ReviewSection from "../Component/ReviewSection";
import { movies as allMovies } from "../data/movies"; // Import central movie list

function Home() {
    // You can now filter or select movies from the central list
    const upcomingMovies = allMovies.filter(movie => movie.year >= 2024);

    return (
        <div>
            <Hero />
            <main className="container mx-auto px-4">
                {/* Category Links */}
                <div className="flex justify-around p-5 flex-wrap gap-4">
                    {[
                        { icon: TrendingUp, label: "Trending", path: "/movies?sort=trending", color: "bg-yellow-500 hover:bg-yellow-600" },
                        { icon: Star, label: "Top Rated", path: "/top-rated", color: "bg-purple-500 hover:bg-purple-600" },
                        { icon: Clock, label: "Coming Soon", path: "/coming-soon", color: "bg-blue-500 hover:bg-blue-600" },
                        { icon: Award, label: "Awards", path: "/awards", color: "bg-red-500 hover:bg-red-600" },
                    ].map((category) => (
                        <Link key={category.label} to={category.path} className={`${category.color} flex items-center gap-2.5 px-6 py-3 md:px-10 rounded-xl text-white font-semibold text-base md:text-lg transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl`}>
                            <category.icon className="w-5 h-5" />
                            <span>{category.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Trending Section */}
                <motion.section
                    className="my-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="flex items-center gap-2 text-3xl text-yellow-400 font-bold">
                            <TrendingUp /> Trending Now
                        </h2>
                        <Link to="/movies?sort=trending" className="text-yellow-400 text-lg hover:underline">View All</Link>
                    </div>
                    <TrendingCarousel />
                </motion.section>

                {/* Coming Soon Section */}
                <section className="my-16">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="flex items-center gap-2 text-3xl text-yellow-400 font-bold">
                            <Clock /> Coming Soon
                        </h2>
                        <Link to="/coming-soon" className="text-yellow-400 text-lg hover:underline">View All</Link>
                    </div>
                    <MovieCarousel movies={upcomingMovies} />
                </section>

                {/* Featured Actors Section */}
                <motion.section
                    className="my-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="flex items-center gap-2 text-3xl text-yellow-400 font-bold">
                            <Award /> Featured Actors
                        </h2>
                        <Link to="/actor" className="text-yellow-400 text-lg hover:underline">View All</Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                        {actors.map((actor, index) => (
                            <motion.div
                                key={actor.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <Link to={`/actor/${actor.id}`} className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400/20 no-underline">
                                    <img src={actor.image} alt={actor.name} className="w-full h-48 object-cover" />
                                    <h3 className="p-3 font-semibold text-white text-base text-center">{actor.name}</h3>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </main>
            <ReviewSection />
        </div>
    );
}

export default Home;