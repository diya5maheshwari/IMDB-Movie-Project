import React, { useState, useEffect } from 'react';
import { Star, Calendar, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredMovies = [
    {
        id: 1,
        title: "Inception",
        rating: 8.8,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        image: "https://musicart.xboxlive.com/7/c9d1100-0000-0000-0000-000000000002/504/image.jpg",
        releaseDate: "2010-07-16",
    },
    {
        id: 2,
        title: "The Dark Knight",
        rating: 9.0,
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        releaseDate: "2008-07-18",
    },
    {
        id: 3,
        title: "Interstellar",
        rating: 8.6,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://www.hauweele.net/~gawen/blog/wp-content/uploads/2014/11/interstellar.jpg",
        releaseDate: "2014-11-07",
    },
    {
        id: 4,
        title: "The Matrix",
        rating: 8.7,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eyF_d2BmIQxoCL5Jy6yobsQJs3jGPN9qUQ&s",
        releaseDate: "1999-03-31",

    }
];

const Hero = () => {
    const [currentMovie, setCurrentMovie] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const movie = featuredMovies[currentMovie];

    return (
        <div className="relative h-[90vh] text-white overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-cover bg-center filter brightness-60" style={{ backgroundImage: `url(${movie.image})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10 px-10 md:px-40 max-w-4xl">
                <div className="flex gap-8 mb-4">
                    <span className="flex items-center gap-2 text-lg text-yellow-400 bg-black/50 px-2.5 py-1 rounded-lg shadow-md"><Star />  {movie.rating} Rating</span>
                    <span className="flex items-center gap-2 text-lg text-white bg-black/50 px-2.5 py-1 rounded-lg shadow-md"><Calendar /> {movie.releaseDate}</span>
                </div>
                <h1 className="text-6xl font-bold mb-4">{movie.title}</h1>
                <p className="text-lg mb-6 text-gray-300">{movie.description}</p>
                <div className="flex gap-4 mt-4">
                    <Link to={`/movies/${movie.id}`} className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-yellow-300 transition-colors">
                        <Play /> Watch Trailer
                    </Link>
                    <Link to={`/movies/${movie.id}`} className="bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors">
                        More Info
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                {featuredMovies.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-opacity ${index === currentMovie ? "bg-yellow-400 opacity-100" : "bg-white opacity-50"}`}
                        onClick={() => setCurrentMovie(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;