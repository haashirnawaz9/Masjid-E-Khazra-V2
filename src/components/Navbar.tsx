import React from 'react';
import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building size={24} />
            <span className="font-bold text-xl">Masjid-e-Khazra</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-emerald-200">Home</Link>
            <Link to="/prayer-times" className="hover:text-emerald-200">Prayer Times</Link>
            <Link to="/about" className="hover:text-emerald-200">About Us</Link>
            <Link to="/donate" className="hover:text-emerald-200">Donate</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;