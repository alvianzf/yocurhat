import { Clock, Calendar, MessageCircle } from 'lucide-react';

const Schedule = () => {
  const listeners = [
    {
      id: 1,
      name: 'Kak Sari',
      avatar: 'S',
      status: 'online',
      availableTime: '19:00 - 22:00',
      speciality: 'Mendengarkan cerita keluarga & percintaan',
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 2,
      name: 'Bang Dedi',
      avatar: 'D',
      status: 'online',
      availableTime: '20:00 - 23:00',
      speciality: 'Cerita pekerjaan & masa depan',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 3,
      name: 'Mbak Rina',
      avatar: 'R',
      status: 'offline',
      availableTime: '18:00 - 21:00',
      speciality: 'Kesehatan mental & self-care',
      color: 'from-green-400 to-emerald-400'
    },
    {
      id: 4,
      name: 'Mas Johan',
      avatar: 'J',
      status: 'online',
      availableTime: '21:00 - 24:00',
      speciality: 'Pertemanan & social anxiety',
      color: 'from-orange-400 to-red-400'
    }
  ];

  const todaySchedule = [
    { time: '18:00 - 19:00', listener: 'Mbak Rina', status: 'available' },
    { time: '19:00 - 20:00', listener: 'Kak Sari', status: 'available' },
    { time: '20:00 - 21:00', listener: 'Bang Dedi', status: 'busy' },
    { time: '21:00 - 22:00', listener: 'Mas Johan', status: 'available' },
    { time: '22:00 - 23:00', listener: 'Kak Sari', status: 'available' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Siapa yang Lagi Siap Dengerin Hari Ini?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami punya Tim Teman Cerita yang siap mendengarkan kamu dengan hati terbuka. 
            Lihat siapa yang sedang online dan jadwal mereka.
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Status Saat Ini</h2>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              Update terakhir: {new Date().toLocaleTimeString('id-ID')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listeners.map((listener) => (
              <div key={listener.id} className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${listener.color} rounded-full flex items-center justify-center mr-3`}>
                      <span className="text-white font-semibold text-lg">{listener.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{listener.name}</h3>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          listener.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                        <span className={`text-sm ${
                          listener.status === 'online' ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {listener.status === 'online' ? 'Online' : 'Offline'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {listener.availableTime}
                    </div>
                    <p className="text-xs">{listener.speciality}</p>
                  </div>

                  {listener.status === 'online' && (
                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors text-sm font-medium">
                      <MessageCircle className="h-4 w-4 inline mr-2" />
                      Mulai Curhat
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Jadwal Hari Ini</h2>
            </div>

            <div className="space-y-4">
              {todaySchedule.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{schedule.time}</p>
                      <p className="text-sm text-gray-600">{schedule.listener}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    schedule.status === 'available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {schedule.status === 'available' ? 'Tersedia' : 'Sibuk'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cara Booking Sesi</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pilih Teman Cerita</h3>
                  <p className="text-gray-600 text-sm">Lihat siapa yang sedang online atau sesuai dengan topik yang ingin kamu ceritakan.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Isi Form Curhat</h3>
                  <p className="text-gray-600 text-sm">Ceritakan apa yang ingin kamu bagikan melalui form yang sudah disediakan.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tunggu Respons</h3>
                  <p className="text-gray-600 text-sm">Tim kami akan merespons dalam 1-24 jam sesuai dengan preferensi yang kamu pilih.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Tips:</strong> Kalau butuh respons cepat, pilih Teman Cerita yang sedang online. 
                Kalau gak urgent, kamu bisa pilih berdasarkan keahlian mereka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;