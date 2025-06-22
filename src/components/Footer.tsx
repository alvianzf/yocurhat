import React from 'react';
import { Heart, Mail, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Yocurhat
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tempat aman untuk berbagi cerita tanpa takut dihakimi. 
              Kami di sini untuk mendengarkan, bukan menghakimi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/tentang" className="text-gray-300 hover:text-white transition-colors">Tentang</Link></li>
              <li><Link to="/curhat" className="text-gray-300 hover:text-white transition-colors">Curhat</Link></li>
              <li><Link to="/jadwal" className="text-gray-300 hover:text-white transition-colors">Jadwal</Link></li>
              <li><Link to="/tim" className="text-gray-300 hover:text-white transition-colors">Tim Kami</Link></li>
              <li><Link to="/konten" className="text-gray-300 hover:text-white transition-colors">Konten</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Yocurhat. Dibuat dengan ❤️ untuk mereka yang butuh didengar.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <MessageCircle className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-sm text-gray-400">
                Kamu gak sendirian
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-red-900 border-t border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-red-100 text-sm">
            <strong>Darurat:</strong> Jika kamu dalam bahaya atau butuh bantuan segera, 
            hubungi <a href="tel:119" className="underline font-semibold">119</a> atau 
            layanan kesehatan mental terdekat.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;