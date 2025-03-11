import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>23-38 81st St, East Elmhurst, NY 11370</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(917) 751-7066</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>masjidkhazrany@gmail.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Prayer Times</h3>
            <p>Visit our prayer times page for daily updates</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support Us</h3>
            <p>Your donations help us maintain and improve our services to the community.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-700 text-center">
          <p>&copy; {new Date().getFullYear()} Masjid-e-Khazra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;