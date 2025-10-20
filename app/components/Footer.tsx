import React from 'react';
// Tambahkan ikon untuk media sosial
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left px-6">
        
        {/* Kolom 1: Tentang Perusahaan */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">ArchiHome</h4>
          <p className="text-sm">
            Jasa desain arsitektur dan interior profesional untuk hunian impian Anda.
          </p>
        </div>

        {/* Kolom 2: Info Kontak Interaktif */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Hubungi Kami</h4>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="mr-3 h-5 w-5 text-blue-400" />
              <a href="mailto:contact@archihome.com" className="hover:text-white transition-colors duration-300">
                contact@archihome.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="mr-3 h-5 w-5 text-blue-400" />
              <a href="tel:+6281234567890" className="hover:text-white transition-colors duration-300">
                +62 812 3456 7890
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-3 h-5 w-5 text-blue-400" />
              <span>Semarang, Indonesia</span>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Media Sosial dengan Ikon */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Ikuti Kami</h4>
          <div className="flex space-x-5 justify-center md:justify-start">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Garis Pemisah dan Copyright */}
      <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-700/50">
        <p className="text-sm">&copy; {new Date().getFullYear()} ArchiHome. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;