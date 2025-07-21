import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clapperboard, Star, Award, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { actors as allActors } from '../data/actors'; // Import from the central data file

export default function ActorProfile() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    // Find the actor directly from the imported central list
    const actorData = allActors.find(a => a.id === id);
    setActor(actorData);
  }, [id]);

  if (actor === undefined) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
        <h2 className="text-red-500 text-2xl mb-4">❌ Actor not found</h2>
        <p className="text-gray-400">Please try again later or check the actor ID.</p>
      </div>
    );
  }

  if (!actor) {
    // Optional: show a loading state while the component initializes
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-10 h-10 border-4 border-yellow-400/30 rounded-full border-t-yellow-400 animate-spin"></div>
        </div>
    );
  }

  return (
    <motion.div 
      className="max-w-6xl mx-auto p-4 md:p-8 bg-[#121212] text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-wrap md:flex-nowrap gap-10 mb-12 items-start">
        <motion.img 
          className="w-full md:w-80 h-auto rounded-xl shadow-2xl object-cover" 
          src={actor.image} 
          alt={actor.name} 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        <motion.div 
          className="flex-1 min-w-[300px]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl mb-2 text-yellow-400 font-bold">{actor.name}</h1>
          <p className="text-gray-400 mb-6 text-lg">
            <span>Born: {actor.birthDate}</span>
            <span className="mx-2">•</span>
            <span>{actor.birthPlace}</span>
          </p>
          
          <div className="mb-8 leading-relaxed text-lg text-gray-200">
            <p>{actor.biography}</p>
          </div>
          
          <div className="flex gap-4 mt-6">
            <a href={actor.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition-transform duration-300 hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={actor.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition-transform duration-300 hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Awards and Filmography sections remain the same */}
      
    </motion.div>
  );
}