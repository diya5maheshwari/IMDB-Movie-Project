import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MovieCarousel = ({ movies }) => {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={'auto'}
                navigation
                className="!px-10" // Add padding to see shadows and prevent clipping
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="!w-auto">
                        <Link to={`/movie/${movie.id}`}  style={{textDecoration:"none"}} >
                            <MovieCard {...movie} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieCarousel;