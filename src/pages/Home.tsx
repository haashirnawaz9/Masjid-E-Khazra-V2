import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1920")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Masjid-e-Khazra</h1>
            <p className="text-xl mb-8">Serving the Muslim Community in Flushing, New York</p>
            <Link to="/donate" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold">
              Support Our Mosque
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-bold mb-2">Prayer Times</h3>
              <p className="mb-4">Check our daily prayer schedule</p>
              <Link to="/prayer-times" className="text-emerald-600 hover:text-emerald-700">View Schedule →</Link>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-bold mb-2">Our Community</h3>
              <p className="mb-4">Learn about our programs and services</p>
              <Link to="/about" className="text-emerald-600 hover:text-emerald-700">Learn More →</Link>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-bold mb-2">Support Us</h3>
              <p className="mb-4">Help us serve our community better</p>
              <Link to="/donate" className="text-emerald-600 hover:text-emerald-700">Donate Now →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;