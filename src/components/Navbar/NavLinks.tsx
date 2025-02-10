import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-6">
      <Link to="/" className="hover:text-emerald-200">Home</Link>
      <Link to="/prayer-times" className="hover:text-emerald-200">Prayer Times</Link>
      <Link to="/about" className="hover:text-emerald-200">About Us</Link>
      <Link to="/donate" className="hover:text-emerald-200">Donate</Link>
    </div>
  );
};

export default NavLinks;