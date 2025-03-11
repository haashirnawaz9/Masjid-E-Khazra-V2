import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ChevronRight } from "lucide-react";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative h-[600px] bg-cover bg-center bg-fixed" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1920")'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 md:text-xl">
              <h1>Assalaam Alaikum wa Rahmatullahu wa Barakatu</h1>
              <h1>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h1>
            </div>

            <h1 className="text-xl md:text-2xl font-bold mb-1">Welcome to the official Website of</h1>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Masjid-e-Khazra</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">Serving the Muslim Community in Flushing, New York</p>
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

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-14 h-14 mx-auto mb-6 text-emerald-600" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Prayer Times</h3>
              <p className="text-gray-600 mb-6">Stay updated with our daily prayer schedule and join our congregation</p>
              <Link 
                to="/prayer-times" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                View Schedule <ChevronRight className="ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
