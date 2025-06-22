import { BookOpen, Heart, Lightbulb, Calendar, Brain, User } from 'lucide-react';

const Content = () => {
  const articles = [
    {
      id: 1,
      title: 'Validasi Emosi: Kenapa Perasaan Kamu Itu Valid',
      excerpt: 'Seringkali kita merasa bersalah karena merasa sedih, marah, atau kecewa. Padahal, semua emosi itu wajar dan butuh diakui.',
      category: 'Kesehatan Mental',
      readTime: '5 menit',
      date: '2 hari yang lalu',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Hak untuk Curhat Tanpa Solusi',
      excerpt: 'Gak semua curhat butuh solusi. Kadang yang kita butuhkan cuma seseorang yang mau dengerin dan bilang "iya, itu berat banget".',
      category: 'Komunikasi',
      readTime: '4 menit',
      date: '5 hari yang lalu',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Self-Talk vs Ngomelin Diri Sendiri',
      excerpt: 'Ada bedanya antara berbicara dengan diri sendiri yang sehat dengan mengkritik diri sendiri yang destruktif. Mari kita bahas.',
      category: 'Self-Care',
      readTime: '6 menit',
      date: '1 minggu yang lalu',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Mengenal Tanda-Tanda Emotional Burnout',
      excerpt: 'Burnout gak cuma soal kerjaan. Emotional burnout juga nyata dan perlu dikenali tanda-tandanya.',
      category: 'Kesehatan Mental',
      readTime: '7 menit',
      date: '2 minggu yang lalu',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Boundaries: Seni Mengatakan "Tidak"',
      excerpt: 'Menetapkan batasan itu bukan egois. Ini tentang menjaga kesehatan mental dan hubungan yang sehat.',
      category: 'Hubungan',
      readTime: '5 menit',
      date: '3 minggu yang lalu',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = [
    { name: 'Semua', count: 12, active: true },
    { name: 'Kesehatan Mental', count: 5, active: false },
    { name: 'Komunikasi', count: 3, active: false },
    { name: 'Self-Care', count: 2, active: false },
    { name: 'Hubungan', count: 2, active: false }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Konten <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Edukasi</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artikel dan konten edukatif tentang kesehatan mental, komunikasi, dan self-care. 
            Ditulis dengan bahasa yang jujur, personal, dan mudah dipahami.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                category.active
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 mr-2" />
                  <span className="text-purple-200 text-sm font-medium">ARTIKEL PILIHAN</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center text-purple-200 text-sm mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  {articles[0].date}
                  <span className="mx-3">•</span>
                  <BookOpen className="h-4 w-4 mr-2" />
                  {articles[0].readTime}
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Baca Selengkapnya
                </button>
              </div>
              <div className="relative">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-600/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.slice(1).map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${article.color} text-white text-xs font-medium rounded-full`}>
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                  Baca Artikel
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dapatkan Konten Terbaru
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Berlangganan untuk mendapatkan artikel terbaru tentang kesehatan mental dan self-care langsung di email kamu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email kamu"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors font-medium">
                Berlangganan
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Gratis dan bisa berhenti berlangganan kapan saja
            </p>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Topik yang Sering Dibahas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'Anxiety & Stress', count: '8 artikel', color: 'from-purple-500 to-pink-500' },
              { icon: Heart, title: 'Self-Love', count: '5 artikel', color: 'from-red-500 to-pink-500' },
              { icon: User, title: 'Hubungan', count: '6 artikel', color: 'from-blue-500 to-cyan-500' },
              { icon: Lightbulb, title: 'Mindfulness', count: '4 artikel', color: 'from-green-500 to-emerald-500' }
            ].map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <topic.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;