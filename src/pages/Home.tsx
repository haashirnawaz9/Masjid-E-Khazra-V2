import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Heart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative min-h-screen bg-cover bg-center bg-scroll md:bg-fixed" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-4"
            {...fadeIn}
          >
            <div className="mb-4 md:text-xl">
              <h1 className="">Assalaam Alaikum wa Rahmatullahu wa Barakatu</h1>
              <h1>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h1>
            </div>

            <h1 className="text-xl md:text-2xl font-bold mb-1">Welcome to the officlal Website of</h1>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Masjid-e-Khazra</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">Serving the Muslim Community in East Elmhurst, New York</p>
            <Link 
              to="/donate" 
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Support Our Mosque
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
