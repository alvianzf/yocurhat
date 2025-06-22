import React from 'react';
import { Heart, Shield, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Yocurhat</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lahir dari pengalaman pribadi tentang betapa sulitnya mencari seseorang yang mau mendengarkan tanpa menghakimi
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Awal Yocurhat</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Yocurhat lahir dari pengalaman sederhana namun mendalam. Ketika merasa terpuruk, 
                seringkali yang kita butuhkan bukan nasihat atau solusi instan, melainkan seseorang 
                yang mau mendengarkan dengan tulus.
              </p>
              <p>
                Kami menyadari bahwa di tengah hiruk pikuk kehidupan modern, semakin sulit menemukan 
                ruang aman untuk berbagi perasaan tanpa takut dihakimi atau mendapat respons yang 
                tidak diinginkan.
              </p>
              <p>
                Dari sinilah Yocurhat hadir - sebagai jembatan antara mereka yang butuh didengar 
                dengan mereka yang siap mendengarkan dengan hati.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="People supporting each other"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kami Dengerin, Bukan Ngasih Solusi</h3>
              <p className="text-gray-600">
                Filosofi utama kami adalah mendengarkan dengan empati. Kami percaya bahwa seringkali 
                yang dibutuhkan adalah validasi perasaan, bukan solusi instan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cerita Kamu Tetap Rahasia</h3>
              <p className="text-gray-600">
                Privasi dan kerahasiaan adalah fondasi kepercayaan. Setiap cerita yang dibagikan 
                dijaga dengan ketat dan tidak akan pernah disebarluaskan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gak Ada Curhat yang Receh</h3>
              <p className="text-gray-600">
                Setiap perasaan valid dan berharga. Tidak ada cerita yang terlalu kecil atau 
                tidak penting untuk didengarkan dan dihargai.
              </p>
            </div>
          </div>
        </div>

        {/* Team Preview */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Teman Cerita</h2>
            <p className="text-xl text-gray-600">
              Orang-orang yang siap mendengarkan cerita kamu dengan hati terbuka
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white font-semibold">T{i}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Teman Cerita {i}</h3>
                <p className="text-gray-600 text-sm">
                  Siap mendengarkan dengan empati dan tanpa menghakimi
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-lg">
          <div className="flex items-start">
            <Star className="h-6 w-6 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Disclaimer Penting</h3>
              <p className="text-yellow-700 leading-relaxed">
                <strong>Yocurhat bukan layanan medis atau terapi profesional.</strong> Kami adalah platform 
                peer-to-peer support di mana sesama manusia saling mendengarkan dan berbagi empati. 
                Jika kamu mengalami krisis mental health yang serius, kami sangat menyarankan untuk 
                mencari bantuan profesional dari psikolog atau psikiater berlisensi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;