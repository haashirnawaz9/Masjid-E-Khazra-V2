import React from 'react';
import { Users, Book } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <img 
              src="/musjid-front.jpeg" 
              alt="Masjid-e-Khazra Front View" 
              className="rounded-lg shadow-md w-full h-[300px] object-cover"
            />
            <img 
              src="/musjid-inside.png" 
              alt="Masjid-e-Khazra Interior" 
              className="rounded-lg shadow-md w-full h-[300px] object-cover"
            />
          </div>

          <div className="prose prose-lg mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Masjid-e-Khazra</h1>
            <p className="text-gray-600 leading-relaxed">
              Masjid-e-Khazra has been serving the Muslim community in Flushing, Queens since its establishment. 
              Our mosque provides a peaceful sanctuary for worship and a vibrant center for Islamic education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Community</h3>
              <p className="text-gray-600">Serving a diverse Muslim community in Queens with daily prayers and weekly programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Book className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-600">Offering Quran classes, Islamic studies, and educational programs for all ages.</p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To serve as a center of Islamic worship and education, 
              fostering spiritual growth and understanding among Muslims and building bridges with our neighbors.
            </p>
            <h3 className="text-xl font-bold mb-2">Programs & Services</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Daily prayers and Friday prayers</li>
              <li>Weekend Islamic School</li>
              <li>Youth programs and activities</li>
              <li>Ramadan programs and Eid celebrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;