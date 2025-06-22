import React, { useState } from 'react';
import { MessageCircle, Send, Heart, Lock } from 'lucide-react';

const CurhatForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    topic: '',
    story: '',
    responseType: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih sudah berbagi cerita. Tim kami akan segera merespons!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ceritakan Apa yang Kamu Rasakan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ruang aman untuk berbagi perasaan tanpa takut dihakimi. 
            Kami di sini untuk mendengarkan, bukan menghakimi.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <Lock className="h-6 w-6 text-green-500 mr-3" />
            <span className="text-gray-700">Cerita kamu dijaga kerahasiaannya</span>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <Heart className="h-6 w-6 text-red-500 mr-3" />
            <span className="text-gray-700">Tanpa menghakimi, hanya mendengarkan</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nama (opsional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Boleh pakai nama panggilan atau anonim"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                Mau curhat sebagai
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              >
                <option value="">Pilih...</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
                <option value="lainnya">Lainnya</option>
                <option value="tidak-mau-jawab">Gak mau jawab</option>
              </select>
            </div>

            {/* Topic */}
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                Tentang apa cerita kamu?
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              >
                <option value="">Pilih topik...</option>
                <option value="keluarga">Keluarga</option>
                <option value="percintaan">Percintaan</option>
                <option value="pertemanan">Pertemanan</option>
                <option value="pekerjaan">Pekerjaan/Sekolah</option>
                <option value="kesehatan-mental">Kesehatan Mental</option>
                <option value="keuangan">Keuangan</option>
                <option value="masa-depan">Masa Depan</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            {/* Story */}
            <div>
              <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">
                Cerita kamu <span className="text-red-500">*</span>
              </label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                required
                rows={8}
                placeholder="Tulis apa yang kamu rasakan... Gak ada yang terlalu kecil atau terlalu besar untuk diceritakan."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                Ceritakan sebebas-bebasnya. Kami di sini untuk mendengarkan.
              </p>
            </div>

            {/* Response Type */}
            <div>
              <label htmlFor="responseType" className="block text-sm font-medium text-gray-700 mb-2">
                Mau dijawab atau cukup didengerin aja?
              </label>
              <select
                id="responseType"
                name="responseType"
                value={formData.responseType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              >
                <option value="">Pilih...</option>
                <option value="didengerin-aja">Cukup didengerin aja</option>
                <option value="mau-respon">Mau dapat respon/tanggapan</option>
                <option value="mau-diskusi">Mau diskusi lebih lanjut</option>
              </select>
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                Email/WhatsApp (opsional)
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Kalau mau dihubungi balik atau dijadwalin ngobrol"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Send className="mr-2 h-5 w-5" />
                Kirim Cerita
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Dengan mengirim cerita, kamu setuju bahwa kami akan menjaga kerahasiaan cerita kamu
              </p>
            </div>
          </form>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 p-6 bg-purple-50 rounded-lg">
          <p className="text-purple-800">
            <strong>Ingat:</strong> Kalau kamu merasa dalam bahaya atau butuh bantuan darurat, 
            segera hubungi hotline kesehatan mental atau layanan darurat terdekat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurhatForm;