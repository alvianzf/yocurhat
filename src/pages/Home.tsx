import { Link } from 'react-router-dom';
import { MessageCircle, Heart, Shield, Users } from 'lucide-react';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Kamu Gak Sendirian,{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Kami Dengerin
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Tempat aman untuk berbagi cerita tanpa takut dihakimi. 
                Kadang yang kamu butuhkan bukan solusi, tapi seseorang yang mau dengerin.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/curhat"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Mulai Curhat
                </Link>
                <Link
                  to="/tentang"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-600 bg-white border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-all duration-200"
                >
                  Kenali Kami
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Person looking out window"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-sm font-medium text-gray-700">Aman & Terpercaya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih Yocurhat?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami hadir dengan pendekatan yang berbeda - mendengarkan tanpa menghakimi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kami Dengerin, Bukan Ngasih Solusi</h3>
              <p className="text-gray-600">
                Kadang yang kamu butuhkan bukan nasihat, tapi seseorang yang mau mendengarkan dengan hati.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cerita Kamu Tetap Rahasia</h3>
              <p className="text-gray-600">
                Privasi adalah prioritas utama. Semua cerita dijaga kerahasiaannya dengan ketat.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gak Ada Curhat yang Receh</h3>
              <p className="text-gray-600">
                Setiap perasaan valid. Tidak ada cerita yang terlalu kecil atau tidak penting untuk dibagikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Apa Kata Mereka</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 italic mb-6">
                  "Pertama kali ngerasa ada yang bener-bener dengerin tanpa langsung kasih nasihat. 
                  Rasanya lega banget bisa cerita tanpa takut dihakimi."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Anonim</p>
                    <p className="text-sm text-gray-500">Pengguna Yocurhat</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 italic mb-6">
                  "Tim Yocurhat bener-bener paham kalau kadang kita cuma butuh didengar. 
                  Mereka sabar dan gak pernah bikin aku merasa aneh."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">B</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Anonim</p>
                    <p className="text-sm text-gray-500">Pengguna Yocurhat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Siap untuk Berbagi Cerita?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Langkah pertama menuju perasaan yang lebih baik dimulai dari sini
          </p>
          <Link
            to="/curhat"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-600 bg-white rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Mulai Curhat Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
