import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Clock, Info, Heart } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/prayer-times", label: "Prayer Times", icon: Clock },
    { to: "/about", label: "About Us", icon: Info },
    { to: "/donate", label: "Donate", icon: Heart },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        className={`
          fixed right-0 top-16 w-64 h-[calc(100vh-4rem)]
          bg-emerald-800 shadow-xl md:hidden
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col py-4">
          {menuItems.map(({ to, label, icon: Icon }) => (
            <Link 
              key={to}
              to={to} 
              onClick={onClose}
              className="flex items-center space-x-4 px-6 py-4 text-white hover:bg-emerald-700/50 transition-colors"
            >
              <Icon size={20} />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;