import React from 'react';
import { Heart, MessageCircle, Clock, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Kak Sari',
      nickname: 'Sari',
      avatar: 'S',
      bio: 'Halo, aku Sari. Pernah ngerasa sendirian dan butuh seseorang yang mau dengerin tanpa ngasih nasihat yang gak diminta. Di Yocurhat, aku pengen jadi pendengar yang kamu butuhkan.',
      speciality: ['Keluarga', 'Percintaan', 'Pertemanan'],
      experience: '2 tahun',
      approach: 'Mendengarkan dengan empati, memberikan validasi perasaan',
      color: 'from-purple-400 to-pink-400',
      availability: 'Senin-Jumat, 19:00-22:00'
    },
    {
      id: 2,
      name: 'Bang Dedi',
      nickname: 'Dedi',
      avatar: 'D',
      bio: 'Gue Dedi. Dulu sering overthinking soal karir dan masa depan sampai susah tidur. Sekarang gue paham kalau kadang kita cuma butuh didengar, bukan dikasih solusi.',
      speciality: ['Pekerjaan', 'Karir', 'Masa Depan'],
      experience: '3 tahun',
      approach: 'Pendekatan praktis namun tetap empatis',
      color: 'from-blue-400 to-cyan-400',
      availability: 'Selasa-Sabtu, 20:00-23:00'
    },
    {
      id: 3,
      name: 'Mbak Rina',
      nickname: 'Rina',
      avatar: 'R',
      bio: 'Aku Rina. Pernah struggle dengan anxiety dan self-doubt. Lewat pengalaman itu, aku belajar pentingnya punya ruang aman untuk berbagi perasaan tanpa dihakimi.',
      speciality: ['Kesehatan Mental', 'Anxiety', 'Self-Care'],
      experience: '4 tahun',
      approach: 'Fokus pada validasi emosi dan self-compassion',
      color: 'from-green-400 to-emerald-400',
      availability: 'Senin-Kamis, 18:00-21:00'
    },
    {
      id: 4,
      name: 'Mas Johan',
      nickname: 'Johan',
      avatar: 'J',
      bio: 'Halo, gue Johan Liebert. Pernah ngerasa awkward dalam pergaulan dan susah buat teman. Di Yocurhat, gue pengen jadi teman yang bisa kamu ajak cerita apa aja.',
      speciality: ['Social Anxiety', 'Pertemanan', 'Introvert Issues'],
      experience: '2 tahun',
      approach: 'Memahami perspektif introvert dan social anxiety',
      color: 'from-orange-400 to-red-400',
      availability: 'Rabu-Minggu, 21:00-24:00'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tim <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Teman Cerita</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kenali orang-orang yang siap mendengarkan cerita kamu dengan hati terbuka. 
            Mereka bukan terapis, tapi teman yang pernah merasakan hal serupa.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div key={member.id} className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Profile Card */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mr-6`}>
                      <span className="text-white font-bold text-2xl">{member.avatar}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                      <p className="text-gray-600">Teman Cerita</p>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">{member.experience} pengalaman</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Keahlian</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.speciality.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Pendekatan</h3>
                      <p className="text-gray-600 text-sm">{member.approach}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Jadwal</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        {member.availability}
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors font-medium">
                    <MessageCircle className="h-5 w-5 inline mr-2" />
                    Curhat dengan {member.nickname}
                  </button>
                </div>
              </div>

              {/* Bio Section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-red-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Cerita {member.nickname}</h3>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed text-lg">
                    "{member.bio}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Siap Berbagi Cerita?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Tim Teman Cerita kami siap mendengarkan kamu. Pilih siapa yang paling cocok 
              dengan cerita yang ingin kamu bagikan.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-600 bg-white rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <MessageCircle className="mr-2 h-5 w-5" />
              Mulai Curhat Sekarang
            </button>
          </div>
        </div>

        {/* Trust Note */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-start">
            <Heart className="h-6 w-6 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Komitmen Kami</h3>
              <p className="text-yellow-700 leading-relaxed">
                Setiap Teman Cerita di tim kami telah melalui proses seleksi dan pelatihan untuk memastikan 
                mereka dapat memberikan dukungan emosional yang aman dan tidak menghakimi. Mereka berkomitmen 
                untuk menjaga kerahasiaan setiap cerita yang dibagikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;